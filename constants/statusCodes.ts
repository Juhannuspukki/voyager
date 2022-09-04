const statusCodes = (status: string) => {
  switch (status) {
    case "Noudata tavanomaista varovaisuutta":
      return 1;
    case "Noudata erityistä varovaisuutta":
      return 2;
    case "Vältä tarpeetonta matkustamista":
      return 3;
    case "Vältä kaikkea matkustamista":
      return 4;
    case "Poistu välittömästi maasta":
      return 5;
    default:
      return 0;
  }
};

export default statusCodes;
