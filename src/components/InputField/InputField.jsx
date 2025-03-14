export default function InputField({
  label,
  field,
  type = "text",
  labelFor,
  ref,
  ...props
}) {
  const Component = field === "textarea" ? "textarea" : "input";

  return (
    <>
      {label && (
        <label className="uppercase font-semibold text-sm" htmlFor={labelFor}>
          {label}
        </label>
      )}
      <Component
        type={field === "textarea" ? undefined : type}
        id={labelFor}
        ref={ref}
        className="bg-zinc-300 w-full p-1 px-3 outline-none focus:border-b-gray-950 focus:border-b-2"
        {...props}
      />
    </>
  );
}
