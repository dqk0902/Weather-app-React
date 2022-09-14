import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContainedButtons({ cityData }) {
  return (
    <div>
      <Button type="submit" variant="contained">
        Show weather info
      </Button>
    </div>
  );
}
