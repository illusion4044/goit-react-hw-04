export default function imageGallery({ items }) {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img  href={item.urls.small}>
              {item.title}
            </img>
          </li>
        ))}
      </ul>
    );
  }