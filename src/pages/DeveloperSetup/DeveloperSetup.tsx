import React from "react";
import { Card } from "../../Components/Card";
import { Label } from "../../Components/Label";
import { Text } from "../../Components/Text";
import { tools } from "../../data/toolData";
import { ToolCard } from "../../Components/ToolCard/ToolCard";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter
} from "../../Components/Table";

export const DeveloperSetup: React.FC = () => {
  return (
    <div>

      {/* 🔵 Tools I Use Section */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h2 style={{ color: "#00aaff", fontSize: "32px", marginBottom: "20px" }}>
          Tools I Use
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "35px",
            flexWrap: "wrap",
            padding: "10px"
          }}
        >
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              image={tool.image}
              link={tool.link}
            />
          ))}
        </div>
      </div>

      {/* 🔵 Developer Setup Card */}
      <div style={{ margin: "40px" }}>
        <Card backgroundColor="#ffffff" disabled={false}>
          <>
            <Label text="Developer Setup" color="#007bff" />
            <Text
              content="Here is the setup I use for development, including editor preferences, terminal configuration, fonts, and tools."
              size="16px"
              color="#333"
            />
          </>
        </Card>

        {/* 🔵 Table Section */}
        <div style={{ marginTop: "30px" }}>
          <Card backgroundColor="#ffffff" disabled={false}>
            <>
              <Label text="Environment Details" color="#007bff" />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell><strong>Category</strong></TableCell>
                    <TableCell><strong>Details</strong></TableCell>
                  </TableRow>
                </TableHeader>

                <tbody>
                  <TableRow>
                    <TableCell>Terminal Setup</TableCell>
                    <TableCell>Windows Terminal + PowerShell Core</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Preferred Editor Font</TableCell>
                    <TableCell>Consolas, JetBrains Mono</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Browsers</TableCell>
                    <TableCell>Chrome, Firefox</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Package Managers</TableCell>
                    <TableCell>npm, npx</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Version Control</TableCell>
                    <TableCell>Git, GitHub Desktop, GitHub Actions</TableCell>
                  </TableRow>
                </tbody>

                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2}>
                      Last Updated: 2025 • Optimized for React + TypeScript
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSetup;
