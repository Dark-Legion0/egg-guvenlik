interface SectionHeaderProps {
  label: string;
  title: string | React.ReactNode;
  sub?: string;
  center?: boolean;
}
export default function SectionHeader({ label, title, sub, center }: SectionHeaderProps) {
  return (
    <div style={{textAlign: center ? "center" : "left", marginBottom:"2.25rem"}}>
      <p className="s-label" style={{justifyContent: center ? "center" : "flex-start"}}>{label}</p>
      <h2 className="s-title">{title}</h2>
      {sub && <p className="s-sub" style={{marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0, textAlign: center ? "center" : "left"}}>{sub}</p>}
    </div>
  );
}
