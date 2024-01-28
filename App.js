function Item({ name, isPacked }) {
  let itemContent = name;
  return <li className="item">
    {name}{isPacked ? '✔' : '❌'}
  </li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sacha's capabilities List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Linux" 
        />
        <Item 
          isPacked={false} 
          name="Angular" 
        />
        <Item 
          isPacked={false} 
          name="Java" 
        />
        <Item 
          isPacked={true} 
          name="SQL" 
        />
        <Item 
          isPacked={true} 
          name="Node.Js" 
        />
        <Item 
          isPacked={false} 
          name="Diploma BTS(Bac+2)" 
        />
      </ul>
    </section>
  );
}
