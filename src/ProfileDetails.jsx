export default function ProfileDetails() {
  const details = [
    { label: "Age:", value: "27" },
    { label: "Country:", value: "Norway" },
    { label: "Phone:", value: "+4745419340" },
    { label: "Email:", value: "markus2.kodehode@gmail.com" },
    { label: "Freelance:", value: "Available" },
  ];

  return (
    <div className="flex-row">
      <ul className="margin-right">
        {details.map((detail, index) => (
          <li key={index} className="highlight">
            {detail.label}
          </li>
        ))}
      </ul>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail.value}</li>
        ))}
      </ul>
    </div>
  );
}
