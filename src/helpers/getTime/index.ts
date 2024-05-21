var data = new Date();
const subtitle = `${data.toLocaleDateString("pt-br", {
    weekday: "long",
  })}, ${data.getDate()} de ${data.toLocaleDateString("pt-br", {
    month: "long",
  })} de ${data.getFullYear()}.`;

export default subtitle