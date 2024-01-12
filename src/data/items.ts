const items = async () => {
  const response = await fetch("https://raw.githubusercontent.com/Kushagra-Kukreti/e-commerce-data/main/data.json");
  return response.json(); // Note: Call response.json() to actually parse the JSON
};

export const fetchData = async () => {
  const data = await items();
  return data;
};
