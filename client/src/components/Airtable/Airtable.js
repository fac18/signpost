import React from 'react';
import { chosenCategory } from '../IconsPage/IconsPage';

function Airtable({ category }) {
  const [airtableData, setAirtableData] = React.useState(null);
  const getData = async () => {
    await fetch(`/api/airtable/${category}`)
      .then(res => res.json())
      .then(info => setAirtableData(info.records));
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>{airtableData ? airtableData[0].id : null}</h2>
      <div></div>
    </div>
  );
}

export default Airtable;
