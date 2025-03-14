export default function CenteredContainer({ children }) {
  return (
    <div className="flex flex-col items-center justify-center m-auto mt-36 space-y-4">
      {children}
    </div>
  );
}