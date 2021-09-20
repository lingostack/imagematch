import React from "react";
import { Breadcrumb, BreadcrumbItem } from "@patternfly/react-core-latest";

export default function Breadcrumbs() {
  return (
      <Breadcrumb>
        <BreadcrumbItem to="/"> Products </BreadcrumbItem>
        <BreadcrumbItem isActive> Versions </BreadcrumbItem>
      </Breadcrumb>
  );
}
