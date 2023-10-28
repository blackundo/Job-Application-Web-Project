function FooterHome() {
  return (
    <>
      <div className="pt-10 border-t mt-10 border-t-slate-700 w-full">
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:place-items-start max-md:pl-4">
          <div className="flex flex-col items-start justify-center">
            <span>Current vacancies</span>
            <span>Offers</span>
            <span>Resume</span>
          </div>
          <div>
            <span className="font-bold ">Popular Vacancies</span>
            <div className="grid grid-cols-2 pt-4 max-md:grid-cols-1 max-md:place-items-start">
              <div className="flex flex-col gap-2">
                <span>SEO specialist</span>
                <span>Copywriter</span>
                <span>Al specialist</span>
                <span>UX/UI designer</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Front-End developer</span>
                <span>Back-End developer</span>
                <span>HTML/CSS developer</span>
                <span>Webflow developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 border-t mt-10 border-t-slate-700 w-full max-md:pl-4">
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-sm:place-items-center max-md:gap-4">
          <span>JobHunter &copy; Copyright 2023, Inc. All rights reserved</span>
          <div className="flex gap-3 items-center justify-start text-slate-400 ">
            <span className="cursor-pointer">Term of service</span>
            <span className="cursor-pointer">Privacy policy</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterHome;
