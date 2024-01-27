import React from "react";

function InputBox({
  label,
  anount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount" />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
          <option value="usd">usd</option>
        </select>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates suscipit accusantium nihil! Ab quo voluptatibus dignissimos velit voluptates. Necessitatibus eveniet laudantium
      a sunt ea aspernatur consequuntur expedita illum quod omnis magnam quibusdam maxime quam rem nulla delectus itaque eligendi alias, praesentium autem distinctio dolor! Sed repudiandae, quaerat
      fuga amet facere corporis alias totam repellat nihil voluptatem consequuntur labore ad ipsam impedit fugiat laboriosam in dicta eaque earum nemo vero dolores esse. Excepturi exercitationem
      corrupti quis facere optio magnam, non iste incidunt tenetur ipsa necessitatibus quasi doloremque nihil voluptates rerum enim eum reiciendis repellat harum repudiandae molestias eos?
      Necessitatibus, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestias quam vero, totam nisi expedita! Fuga commodi, pariatur aperiam libero molestiae voluptate
      dignissimos, aliquid iste aut possimus consequatur temporibus autem qui laudantium nam adipisci! Sed velit id delectus qui vel. Accusamus, corrupti quo. Minus, molestiae incidunt autem eveniet
      laborum amet hic veniam quasi. Dolorem explicabo esse consectetur sunt maxime minus voluptatem ab saepe similique. Quo dolorem eos perspiciatis tempore facere pariatur, harum dicta non at earum
      facilis laboriosam et similique? Nesciunt voluptatum excepturi eum? Deleniti cumque ipsa sed iste hic possimus repudiandae? Illum, vitae, quia perspiciatis aspernatur commodi sint deserunt
      voluptas dolorum nobis dolores odio minus, et sunt consequatur impedit suscipit assumenda soluta ullam eligendi porro veritatis voluptatibus eum! Unde delectus magnam sunt dolore omnis, ad
      reprehenderit autem pariatur nihil nisi vitae labore laborum, incidunt atque consequatur. Voluptate expedita aliquam explicabo totam eveniet, tempora neque provident vel dicta, quibusdam natus
      animi incidunt pariatur repellendus ullam ratione harum, culpa sed. Fugiat, molestiae praesentium blanditiis asperiores sunt doloremque minima dolorum voluptatem debitis vitae nobis. Laudantium,
      aperiam voluptate! Doloremque, error necessitatibus? Laborum ea molestiae velit cum amet quia corporis cumque dolorum, sit iste, asperiores accusantium, maxime ipsam harum nobis hic soluta
      pariatur eos quos quaerat commodi. Perferendis repellat, impedit nesciunt, magnam nostrum reiciendis ullam voluptatem omnis modi beatae vitae veritatis voluptates placeat delectus, inventore
      sunt! Et beatae quia delectus ducimus repudiandae veniam consequuntur numquam quis sit adipisci, maiores necessitatibus explicabo, iste eos quidem natus vitae amet modi. Laboriosam iusto
      expedita porro voluptas quasi, obcaecati doloribus ipsa veniam consequatur impedit maiores ducimus debitis commodi dolore dolorem ipsam repudiandae id possimus voluptatem placeat et in! Earum
      dolores nostrum atque sequi dolore ipsa. Aperiam voluptate corrupti laudantium odit nesciunt molestias nisi! Deleniti deserunt voluptatibus enim asperiores nisi fugiat dolorum similique quidem
      blanditiis ullam, quam facilis rerum.
    </div>
  );
}

export default InputBox;
