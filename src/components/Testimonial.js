const Testimonial = (props) => {
  const { body, img, name, position } = props;

  return (
    <div className="h-[15.6875rem] w-[90%] rounded-xl bg-white p-4 shadow-lg lg:p-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          {" "}
          <div>
            <img
              alt="user"
              src={img}
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-lato font-bold text-[#000230] lg:text-[1.25rem] lg:leading-7">
              {name}
            </p>
            <p className="font-lato text-sm text-[#667085]">{position}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 font-lato text-[#000230] lg:mt-6 lg:text-[1.25rem] lg:leading-7">
        {`”${body}”`}
      </div>
    </div>
  );
};

export default Testimonial;
