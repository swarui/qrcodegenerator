function Footer() {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="w-full flex justify-center py-0 px-4 text-center">
      <span className="bg-gray-900 text-white px-3 mt-2 py-1 text-[10px] sm:text-[10px] md:text-[11px]">
        © QR code generator 2025, built by
        <a
          href="https://stevewarui.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1">
          this guy
        </a>
      </span>
    </div>
  );
}

export default Footer;
