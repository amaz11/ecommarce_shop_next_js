"use client";
import { Drawer as Sidebar, MenuItem } from "@mui/material";
import Link from "next/link";

const Drawer = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <div>
      <Sidebar
        open={drawerOpen}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 200 },
        }}
        onClose={() => setDrawerOpen(!drawerOpen)}
      >
        <div className="pt-5">
          <Link href={"/"} onClick={() => setDrawerOpen(!drawerOpen)}>
            <MenuItem>Dashbord</MenuItem>
          </Link>
          <Link href={"/category"} onClick={() => setDrawerOpen(!drawerOpen)}>
            <MenuItem>Category</MenuItem>
          </Link>
          <MenuItem>Product</MenuItem>
          <MenuItem>Order</MenuItem>
          <MenuItem>Banner</MenuItem>
          <MenuItem>Customer</MenuItem>
        </div>
      </Sidebar>
    </div>
  );
};

export default Drawer;
