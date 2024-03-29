"use client";

import { Cliente } from "@/src/types/cliente/Cliente";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type ClientesListActionsProps = {
  cliente: Cliente;
};

export function ClientesListActions(props: ClientesListActionsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const currentPath = usePathname();
  const { cliente } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClick}>
        Ações
      </Button>
      <Menu onClose={handleClose} anchorEl={anchorEl} open={open}>
        <MenuItem>
          <Link href={`${currentPath}/${cliente.id}`}>
            <Button variant="text">Detalhes</Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={`${currentPath}/${cliente.id}/oportunidades`}>
            <Button variant="text">Oportunidades</Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={`${currentPath}/${cliente.id}/representantes`}>
            <Button variant="text">Representantes</Button>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
