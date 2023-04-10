import { useContext, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { Box, CircularProgress, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useMutation } from "@tanstack/react-query";

import { tokens } from "../../../../theme/theme";
import {
  ArticleContext,
  ArticleContextInterface,
} from "../../../../context/ArticleCtx";
import { Spinner } from "../../../../components/Spinner/Spinner";
import { API_URL } from "../../../../config";

const AdminArticlesList = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loadingItemId, setLoadingItemId] = useState<string | null>(null);

  const { data, dataIsLoading, dataIsError, refetch }: any =
    useContext<ArticleContextInterface>(ArticleContext);

  console.log({ data });

  const deleteArticleMutation = useMutation(
    async (variables: { id: string; createdAt: string }) => {
      setLoadingItemId(variables.id);
      const { id, createdAt } = variables;
      const response = await axios.delete(
        `${API_URL}/articles/${id}/${createdAt}`
      );
      return response.data;
    },
    {
      onError: (error) => {
        console.error("Error deleting article:", error);
      },
      onSuccess: () => {
        refetch(); // Refetch data when the delete mutation is successful
      },
      onSettled: () => {
        setLoadingItemId(null);
      },
    }
  );

  if (dataIsLoading) {
    return <Spinner />;
  }

  if (dataIsError) {
    return (
      <Box
        display={"flex"}
        height={"100vh"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <h1>The site is temporarily down for maintenance</h1>
        <h2>Sorry for the inconvenience</h2>
      </Box>
    );
  }

  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "Id", headerName: "ID" },
    {
      field: "Category",
      headerName: "Category",
      flex: 1,
      cellClassName: "category-column--cell",
    },
    {
      field: "Title",
      flex: 1,
      headerName: "Title",
    },
    {
      field: "Image_url",
      headerName: "Image",
      flex: 1,
    },
    {
      field: "CreatedAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "modify",
      headerName: "Modify",
      flex: 1,
      renderCell: ({ row: { Id } }: { row: { Id: string } }) => {
        const isCurrentItemLoading = loadingItemId === Id;
        return (
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box
              flex={2}
              m="0 2.5px"
              p="5px"
              display="flex"
              justifyContent="center"
              sx={{
                cursor: "pointer",
                border: `1px solid ${colors.primary[800]}`,
                borderRadius: "4px",

                ":hover": {
                  backgroundColor: colors.primary[700],
                  color: "#fff",
                },
              }}
              onClick={() => {
                const rowData = data.find((item: any) => item.Id === Id);
                navigate(`/admin/modify-article`, { state: { rowData } });
              }}
            >
              Update
            </Box>

            <Box
              flex={1}
              m="0 2.5px"
              p="5px"
              display="flex"
              justifyContent="center"
              sx={{
                cursor: "pointer",
                border: `1px solid ${colors.primary[800]}`,
                borderRadius: "4px",

                ":hover": {
                  backgroundColor: colors.primary[700],
                  color: "#fff",
                },
                "& .MuiSvgIcon-root": {
                  color: "#ff5c5cfa",
                },
              }}
              onClick={() => {
                const article = data.find((item: any) => item.Id === Id);
                deleteArticleMutation.mutate({
                  id: article.Id,
                  createdAt: article.CreatedAt,
                });
              }}
            >
              {isCurrentItemLoading ? (
                <Box height={"32px"} width={"32px"} sx={{ display: "flex" }}>
                  <CircularProgress size={24} />
                </Box>
              ) : (
                <DeleteForeverIcon />
              )}
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={() => nanoid()}
          checkboxSelection
          rows={data}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default AdminArticlesList;
