export const getCalculatorTool = {
  type: "function",
  function: {
    name: "calculate",
    description: "進行數學計算。",
    parameters: {
      type: "object",
      properties: {
        expression: {
          type: "string",
          description: "字串，如'10+5*2'",
        },
      },
      required: ["expression"],
    },
  },
};

export async function calculate({ expression }) {
    return eval(expression)
}
