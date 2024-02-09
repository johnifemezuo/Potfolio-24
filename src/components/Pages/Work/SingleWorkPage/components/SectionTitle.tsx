export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className=" text-2xl lg:text-3xl tracking-tighter capitalize font-bold text-gray-900">
      {title}
    </h1>
  );
};
