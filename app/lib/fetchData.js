export default async function fetchData(url) {
    try {
      const response = await fetch(url,{
        next:{
          revalidate:60
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null; // handle the error case
    }
  }
  