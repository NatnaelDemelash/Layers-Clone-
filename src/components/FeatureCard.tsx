export default function FeatureCard(props: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  const { children, title, description } = props;

  return (
    <div>
      <div>{children}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
