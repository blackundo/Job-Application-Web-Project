export function transformJob(job) {
  console.log(job.errollmentStatus);
  const {
    id,
    dateEnd,
    dateSubmit,
    errollmentStatus,
    fieldName,
    hiringName,
    applicationLimit,
    maxSalary,
    minSalary,
    status,
    hiringContentID: { id: hiringContentID, content, title },
  } = job;
  return createData({
    id,
    dateEnd,
    dateSubmit,
    errollmentStatus,
    fieldName,
    hiringName,
    applicationLimit,
    maxSalary,
    minSalary,
    status,
    hiringContentID,
    content,
    title,
  });
}

function createData({
  id,
  dateEnd,
  dateSubmit,
  errollmentStatus,
  fieldName,
  hiringName,
  applicationLimit,
  maxSalary,
  minSalary,
  status,
  hiringContentID,
  content,
  title,
}) {
  return {
    id,
    dateEnd,
    title,
    dateSubmit,
    errollmentStatus,
    status,
    details: [
      {
        id: hiringContentID,
        hiringName: hiringName,
        FieldName: fieldName,
        maxSalary: maxSalary,
        minSalary: minSalary,
        applicationLimit: applicationLimit,
        content: content,
      },
    ],
  };
}
