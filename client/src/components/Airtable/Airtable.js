import React from 'react';

function Airtable() {
  const [airtableData, setAirtableData] = React.useState(null);
  const getData = async () => {
    await fetch('/api/airtable')
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
