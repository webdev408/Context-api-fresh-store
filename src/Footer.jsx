const Footer = () => {
  const currentDate = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <div className="container">
      <h6 className="text-center text-success my-4">
        &copy; TekSkillDev, {currentDate}
      </h6>
    </div>
  );
};
export default Footer;
