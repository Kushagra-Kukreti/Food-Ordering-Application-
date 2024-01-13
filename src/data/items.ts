const items = async () => {
  const response = await fetch("https://raw.githubusercontent.com/Kushagra-Kukreti/e-commerce-data/main/data.json");
  return response.json(); 
};

export const fetchData = async () => {
  const data = await items();
  return data;
};