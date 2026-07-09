function SectionTitle({ subtitle, title }) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[4px] text-violet-400 font-semibold">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-4">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;