const AuthentificationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      {children}
    </div>
  );
};

export default AuthentificationLayout;
