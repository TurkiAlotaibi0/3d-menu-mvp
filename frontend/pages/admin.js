const fakeDishes = [
  { id: '1', name: 'Dish 1', views: Math.floor(Math.random() * 1000) },
  { id: '2', name: 'Dish 2', views: Math.floor(Math.random() * 1000) },
];

export default function Admin() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {fakeDishes.map(dish => (
            <tr key={dish.id}>
              <td>{dish.id}</td>
              <td>{dish.name}</td>
              <td>{dish.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 