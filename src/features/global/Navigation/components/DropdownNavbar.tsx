import { Box, Divider, useMediaQuery, Theme } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import useClickOutside from "../../../../hooks/useClickOutside";
import { categories } from "../DropdownNavbarData";

const DropdownContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 0px;
  top: 80px;
`;

interface DropdownMenuProps {
  open: boolean;
}

const DropdownMenu = styled.ul<DropdownMenuProps>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  align-items: center;
  width: 100vw;
  top: 0;
  right: 0;
  list-style-type: none;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ccc;
  padding: 20px;
  margin: 0;
  z-index: 10;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const DropdownItem = styled.li`
  padding: 8px 20px;
  cursor: pointer;
  font-size: 13px;
  color: #8e8e8e;
  &:hover {
    color: #000;
  }
`;

interface DropdownNavbarProps {
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
  toggleDropdown: (event: React.MouseEvent) => void;
}

export const DropdownNavbar: React.FC<DropdownNavbarProps> = ({
  dropdownOpen,
  setDropdownOpen,
}) => {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLUListElement>(null);
  const dropdownItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  useClickOutside(dropdownRef, () => setDropdownOpen(false));

  const handleItemClick = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const path = target.dataset.path || "";
    const category = target.dataset.category || "";
    navigate(path, { state: { category: category }, replace: true });
    setDropdownOpen(false);
  };

  const renderItems = (indexes: number[]) => {
    return categories
      .filter((_, index) => indexes.includes(index))
      .map((item, index) => (
        <DropdownItem
          key={index}
          ref={(el) => (dropdownItemsRef.current[index] = el)}
          data-path={item.path}
          data-category={item.category}
          onClick={handleItemClick}
        >
          {item.category}
        </DropdownItem>
      ));
  };

  return (
    <DropdownContainer>
      <DropdownMenu open={dropdownOpen} ref={dropdownRef}>
        <Box display={"flex"} flexDirection={isSmallScreen ? "column" : "row"}>
          <Box>{renderItems([0, 1, 2, 3, 4])}</Box>
          {!isSmallScreen && <Divider orientation="vertical" flexItem />}
          {isSmallScreen && <Divider orientation="horizontal" />}
          <Box>{renderItems([5, 6, 7, 8, 9])}</Box>
          {!isSmallScreen && <Divider orientation="vertical" flexItem />}
          {isSmallScreen && <Divider orientation="horizontal" />}
          <Box>{renderItems([10, 11, 12, 13, 14])}</Box>
          {!isSmallScreen && <Divider orientation="vertical" flexItem />}
          {isSmallScreen && <Divider orientation="horizontal" />}
          <Box>{renderItems([15, 16, 17, 18, 19])}</Box>
        </Box>
      </DropdownMenu>
    </DropdownContainer>
  );
};
