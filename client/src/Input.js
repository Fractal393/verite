function Input (props) {
  return (
    <input {...props} className={"bg-verite_light-brightest dark:bg-verite_dark-brightest text-verite_text p-2 border border-verite_light-brightest dark:border-verite_dark-brightest  rounded-md block "+props.className} />
  );
}

export default Input;