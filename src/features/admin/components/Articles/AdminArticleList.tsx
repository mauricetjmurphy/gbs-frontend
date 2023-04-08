import { useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import { DataGrid, GridAlignment } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import Header from "../global/Header";
import { tokens } from "../../../../theme/theme";
import { mockDataTeam } from "../../../../data/mockData";
import {
  ArticleContext,
  ArticleContextInterface,
} from "../../../../context/ArticleCtx";
import { Spinner } from "../../../../components/Spinner/Spinner";

const AdminArticlesList = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, dataIsLoading, dataIsError }: any =
    useContext<ArticleContextInterface>(ArticleContext);

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
      headerName: "Title",
    },
    {
      field: "Image_url",
      headerName: "Image",
      flex: 1,
    },
    {
      field: "Date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { Id } }: { row: { Id: string } }) => {
        return (
          <Box
            width={0.6}
            m="0 auto"
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
          getRowId={(row) => row.Id}
          checkboxSelection
          rows={data}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default AdminArticlesList;
