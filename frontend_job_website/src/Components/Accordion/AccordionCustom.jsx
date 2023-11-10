import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function AccordionCustom({ children, title, list, onClick }) {
  return (
    <div className="flex items-center justify-between border-t border-slate-300 w-full">
      <div className="w-full">
        <Accordion>
          <AccordionSummary
            expandIcon={
              <span
                onClick={onClick}
                className={
                  "text-2xl font-semibold text-slate-400 cursor-pointer"
                }
              >
                +
              </span>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <span className="flex gap-3">
                {children}
                {title}
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {Array.isArray(list) ? (
                <ul className="flex items-center justify-start gap-3 w-full overflow-x-auto ">
                  {list.map((item, index) => (
                    <li
                      key={index}
                      className="border p-1 w-20 text-center bg-sky-300 rounded-lg text-base font-semibold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Invalid list format</p>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
