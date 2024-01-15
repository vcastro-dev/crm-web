"use client";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalculateIcon from "@mui/icons-material/Calculate";

const options = [
  {
    name: "Leads",
    path: "/leads",
    icon: <></>,
  },
  {
    name: "Prospecções",
    path: "/prospeccoes",
    icon: <></>,
  },
  {
    name: "Clientes",
    path: "/clientes",
    icon: <></>,
  },
  {
    name: "Oportunidades",
    path: "/oportunidades",
    icon: <></>,
  },
  {
    name: "Contratos",
    path: "/contratos",
    icon: <AttachMoneyIcon />,
  },
  {
    name: "Calculadora",
    path: "/calculadora",
    icon: <CalculateIcon />,
  },
  {
    name: "Usuários",
    path: "/usuarios",
    icon: <PersonIcon />,
  },
];

export function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 200, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {Object.values(options).map((option) => (
            <ListItemButton
              href={option.path}
              LinkComponent={Link}
              key={option.name}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
