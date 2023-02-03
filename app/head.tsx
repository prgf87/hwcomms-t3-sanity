export default function Head({ title }: any) {
  return (
    <>
      <title>
        {title
          ? title + ' - Hailey Wilson Communications'
          : 'Hailey Wilson Communications'}
      </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Developed by WebTechSystems" />
      <link rel="icon" href="/images/logo.png" />
    </>
  );
}
