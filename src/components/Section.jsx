export default function Section({
  children,
  title,
  container,
  ...specialProps
}) {
  const Container = container;
  return (
    <Container {...specialProps}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
