function IntroductionPage({ showMoreMainFields, setShowMoreMainFields }) {
  const mainFields = [
    {
      title: "Technology",
      subFields: [
        {
          title: "Information",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam doloremque sit voluptate delectus itaque dolor omnis beatae? Eos facere recusandae error tempore minusmolestias autem? Tempore aliquid esse molestiae harum!",
        },
        {
          title: "Achievement",
          content:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quos, fugit voluptatum inventore ex accusamus sapiente error praesentium odio explicabo, maxime consequatur quia, illum dolore consequuntur at atque distinctio debitis. Consequuntur?",
        },
      ],
    },
    {
      title: "E-commerce",
      subFields: [
        {
          title: "Information",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam doloremque sit voluptate delectus itaque dolor omnis beatae? Eos facere recusandae error tempore minusmolestias autem? Tempore aliquid esse molestiae harum!",
        },
        {
          title: "Achievement",
          content:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quos, fugit voluptatum inventore ex accusamus sapiente error praesentium odio explicabo, maxime consequatur quia, illum dolore consequuntur at atque distinctio debitis. Consequuntur?",
        },
      ],
    },
    {
      title: "Marketing",
      subFields: [
        {
          title: "Information",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam doloremque sit voluptate delectus itaque dolor omnis beatae? Eos facere recusandae error tempore minusmolestias autem? Tempore aliquid esse molestiae harum!",
        },
        {
          title: "Achievement",
          content:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quos, fugit voluptatum inventore ex accusamus sapiente error praesentium odio explicabo, maxime consequatur quia, illum dolore consequuntur at atque distinctio debitis. Consequuntur?",
        },
      ],
    },
  ];
  const mainFieldsToShow = showMoreMainFields ? mainFields.length : 1;

  const handleToggleMore = () => {
    setShowMoreMainFields(!showMoreMainFields);
  };

  return (
    <div>
      <div>
        <span className="text-xl font-bold ">Introduction:</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae
          saepe repudiandae possimus commodi voluptas doloribus, harum deserunt
          pariatur magnam eveniet dicta iste voluptatibus aliquid quisquam culpa
          eius nostrum repellat! Officia fugit eaque odio? Error animi unde
          consequatur sit facilis reiciendis id eveniet tenetur nam tempore,
          repudiandae magnam accusamus tempora eos repellat eius impedit
          recusandae perspiciatis? Modi accusamus illum saepe! Quis perspiciatis
          quae corporis, animi impedit odio, ex optio eveniet rem autem
          voluptatem voluptates fuga quos. Est veritatis soluta expedita, sit
          iure, ratione, omnis ut modi accusamus et mollitia illum.
        </p>
      </div>
      <div>
        <span className="text-xl font-bold">Main field</span>
        {mainFields.slice(0, mainFieldsToShow).map((mainField, index) => (
          <div key={index}>
            <span className="text-xl font-bold">{mainField.title}:</span>
            <ul>
              {mainField.subFields.map((subField, subIndex) => (
                <li key={subIndex}>
                  {/* <span className="text-lg font-semibold text-slate-600 after:content-[':']">
                      {subField.title}
                    </span> */}
                  <ul>
                    <li>
                      <span className="text-slate-700 font-bold">
                        {subField.title}:
                      </span>
                      <br />
                      <span className="text-sm">{subField.content}</span>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {mainFields.length > 2 && (
          <button
            onClick={handleToggleMore}
            className={showMoreMainFields ? "text-sky-300 " : "text-red-400"}
          >
            {showMoreMainFields ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default IntroductionPage;
