type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="space-y-1 mb-14">
      <p className="font-inter font-semibold text-xl text-white text-opacity-70">{subtitle}</p>
      <h2 className="font-poppins font-semibold text-5xl/tight text-white">{title}</h2>
    </div>
  );
}

export default SectionHeader;