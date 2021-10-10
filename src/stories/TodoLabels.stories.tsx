import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { TodoLabels } from "../components/todoLabels";
import "../index.css";

export default {
  title: "Todo Labels",
  components: TodoLabels,
} as ComponentMeta<typeof TodoLabels>;

const Template: ComponentStory<typeof TodoLabels> = (args) => (
  <TodoLabels {...args} />
);

export function Sample() {
  return <TodoLabels labels={["shopping", "household"]} />;
}
