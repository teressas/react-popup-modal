import React, { useState } from 'react';
import './Modal.css';
export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              modi quo iste odit. Nemo officia tenetur velit, id soluta mollitia
              deleniti sapiente voluptatum suscipit dolore ipsa error, sed
              nostrum cumque impedit magnam corporis culpa ratione quasi
              facilis. Blanditiis necessitatibus, dolore assumenda optio officia
              ex molestiae! Natus libero placeat repellat quae!
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas
        non provident eaque quas eligendi consequatur, eum animi laudantium
        deserunt voluptate accusantium a nostrum voluptatum ipsa impedit minima.
        Obcaecati similique tempora ipsam delectus distinctio maiores earum?
        Exercitationem dolores quisquam soluta fugit asperiores, itaque
        perspiciatis consequatur repellat deserunt similique nisi eveniet porro
        dolorem illo repellendus sed veritatis aperiam quo commodi eos. Ab rerum
        iusto obcaecati repellat optio harum inventore consequatur
        exercitationem ea quam, suscipit porro dolor totam nobis placeat in
        soluta nam, vero corrupti. Nesciunt est totam necessitatibus eaque culpa
        porro delectus fugiat cum. Illum quam, error veniam ea molestias sint ab
        eum, corrupti distinctio quo veritatis exercitationem voluptatum
        asperiores earum, sunt corporis? Vel, voluptatum necessitatibus
        laudantium optio expedita distinctio maiores? Nemo deserunt maxime
        excepturi incidunt, mollitia, alias culpa a delectus nihil nam
        temporibus possimus eligendi similique tempora. Minima quisquam aliquid
        at quis sequi, laborum, facilis ducimus pariatur doloremque ad
        distinctio accusamus, dolor ipsum eos voluptatem illo nemo deserunt. In
        iste temporibus quasi vero quo eligendi laudantium? Quo pariatur eaque
        qui illo omnis consectetur voluptate consequatur. Ad reprehenderit quos
        ut minima cum quo corporis laborum, eos dolor assumenda voluptatum
        officia, nesciunt optio illum alias. Quidem eaque sit repellat soluta!
        Ab, facere. Natus maiores necessitatibus pariatur beatae illo voluptas
        et voluptatum earum dolor eos eaque omnis, saepe minus rerum
        consequuntur! Delectus ad reiciendis animi possimus odio error incidunt
        deserunt labore. Molestiae laboriosam porro tenetur hic, delectus
        excepturi culpa maiores accusantium. Vero ab molestias, distinctio
        possimus fugiat minima ullam suscipit sapiente ad omnis animi nesciunt.
        Rem culpa perspiciatis, recusandae itaque quis deleniti error molestiae
        minus sit. Illo, iste modi perferendis, id accusantium quas explicabo
        iure necessitatibus quisquam quasi unde exercitationem ducimus impedit,
        maxime autem nesciunt vitae cumque et alias. Cumque, necessitatibus
        ullam enim minus quasi accusantium dolor dolores tempore vitae. Pariatur
        sunt mollitia harum autem neque accusantium rem, beatae qui, quia sit,
        veritatis sed dolor blanditiis! Fugit, ratione quisquam ipsam similique
        cumque numquam adipisci unde, quod explicabo nulla iusto. Provident
        debitis asperiores vero officiis enim iste id! Expedita mollitia
        voluptas tempore repellendus neque voluptatum nemo ex necessitatibus
        vel! Maiores illo ut, quod, facilis iure veniam asperiores quaerat
        consectetur ea pariatur eum explicabo! Est adipisci maxime vero, nulla,
        iure quis dolorum illum, quaerat mollitia voluptatem ea reiciendis
        aliquam? Deserunt ipsum ullam excepturi. Provident vel fugit ipsum
        facere eligendi consequuntur alias, asperiores ad eius reiciendis odio
        itaque fuga aut laudantium veniam esse earum culpa inventore sed? Vero
        repellendus earum autem error dignissimos itaque. Quisquam, corrupti est
        fugit sequi ratione soluta provident tenetur nam similique velit
        doloremque itaque dolores veniam error molestiae quos inventore vitae
        praesentium sapiente quo magnam explicabo omnis quis. Molestias,
        repellendus nulla. Expedita perferendis eligendi, assumenda, odio quasi,
        praesentium sequi aliquam repellendus molestiae ad voluptas ducimus
        suscipit provident temporibus quibusdam molestias fugiat. Possimus
        fugiat est, dolor ipsum non doloribus vitae aut similique veritatis eum
        fuga, architecto tempore animi earum excepturi facilis voluptatum
        voluptatibus placeat asperiores unde quo aspernatur esse! Aliquam quas
        quibusdam nisi alias non ducimus velit. Dolorem soluta deserunt eligendi
        numquam itaque consequatur dignissimos enim iusto cupiditate magnam?
        Tempore recusandae repellendus illo obcaecati dolorem laborum sunt eos
        doloremque. Exercitationem, nostrum nihil itaque fugiat animi tempore ad
        blanditiis, distinctio libero sit quasi cum est illum suscipit ducimus
        cumque eius magnam! Doloremque eum sapiente odio, provident dolor hic
        illo labore fuga unde iusto accusantium dicta, ut nulla atque repellat
        consectetur officia perspiciatis dolores, quisquam illum ullam iure
        temporibus fugit dolorum! Soluta, veritatis. Quos dolorem ipsum eligendi
        deserunt nobis autem architecto blanditiis praesentium nihil magnam
        quisquam saepe minima doloribus obcaecati similique natus repudiandae
        amet soluta est facere, sapiente laborum porro consequatur possimus.
        Cumque animi illum aspernatur aliquam voluptatem eveniet obcaecati!
        Voluptate ipsam, pariatur amet atque maxime ut. Consectetur inventore
        temporibus qui! Dignissimos quaerat, possimus quam doloremque earum
        officia ipsa! Tempore quam nihil modi veritatis voluptas nulla
        consectetur fugiat dicta odio accusantium ipsam facilis eius velit quasi
        fugit, earum neque repudiandae iusto? Nisi ipsa ad quas iste aperiam sit
        impedit officia esse dolor! Ut consequuntur impedit maxime, iste
        laboriosam deserunt. Dicta labore temporibus placeat, tempora ullam
        maiores excepturi. Ipsa amet quo obcaecati officia delectus dolorum,
        unde porro harum qui et ea illo numquam vel vitae architecto rerum,
        distinctio iure. Sequi dolores odio illum eaque officiis reiciendis?
        Quae, necessitatibus laborum quas voluptatum laudantium culpa mollitia.
        Reprehenderit atque, necessitatibus molestiae cupiditate ea iure rem
        expedita illum dignissimos, vel veritatis labore sequi amet maiores
        nulla sunt nemo nisi adipisci! Praesentium esse vero itaque aut quidem
        repellat illum minus fugit, ipsa accusamus omnis maiores? Dolorem
        facilis consectetur id similique molestiae voluptatem modi sit sunt enim
        exercitationem iusto illum recusandae, est incidunt porro tempore!
        Temporibus, blanditiis. Libero pariatur minima nam iusto corporis
        cupiditate aliquam omnis quaerat neque velit alias eos eveniet commodi,
        dolor dolores tempore vel quibusdam numquam! Soluta amet officia, ipsa
        sed at doloribus quo, aut iure sunt culpa totam dolorum quisquam. Vel
        incidunt sit, cumque quia asperiores, deserunt labore quasi tempora
        minus dolorem vitae cum animi ipsa saepe corporis unde quisquam id
        exercitationem, cupiditate maiores. Similique quae, dolorum at ex
        adipisci enim doloribus, consectetur ipsam veniam numquam atque. Aut
        eveniet vitae adipisci similique omnis assumenda. Odio, iste tempore
        sapiente maxime, recusandae consequuntur similique ducimus, cupiditate
        adipisci ut soluta nisi dolor sint praesentium asperiores voluptas nam
        impedit sit repellendus nemo nostrum culpa! Architecto fugit saepe
        necessitatibus, veniam corrupti amet cumque laborum a dolor tempore
        libero ipsa perspiciatis nostrum. Unde, provident nisi quod consequatur
        facilis alias nesciunt recusandae id perspiciatis? Minima nesciunt
        distinctio voluptate! Eum possimus nisi vero facere, quia ducimus
        recusandae, consequatur ipsum sit quod neque animi odio dignissimos
        doloremque. Corrupti magnam, tempore atque amet aut laudantium omnis
        reprehenderit assumenda accusamus veritatis harum consectetur
        praesentium totam dolore illum. Aspernatur quae velit culpa numquam?
        Aspernatur cumque deserunt amet iste facilis odit commodi nam sint eius
        dolor doloremque soluta veniam quis ab excepturi perspiciatis quidem
        minima inventore corporis incidunt fugit molestiae, ipsam fugiat
        laudantium! Harum, magni, est nulla maiores enim eius magnam architecto
        sunt fugit sit assumenda neque accusamus unde similique porro
        consequatur suscipit voluptatibus. Nostrum ullam excepturi accusamus
        dolorum quia quam nobis itaque doloremque eaque neque, explicabo laborum
        impedit velit sequi fuga eius esse autem reprehenderit debitis sit
        similique. Ipsam non deleniti adipisci dolorum laboriosam illo beatae
        repudiandae nisi nam, quo molestiae laborum quidem repellat iure. Atque
        blanditiis assumenda dicta ad commodi, nam fugiat. Iusto dolor eum
        necessitatibus repudiandae natus rerum unde at perferendis consequuntur
        recusandae vero cupiditate ducimus nostrum magni illum, corporis quaerat
        quam iure. Vitae ullam deleniti dolore repellat, placeat voluptatum odit
        nobis impedit consequuntur ipsam. Dolores error, in qui enim inventore
        dicta totam sint possimus earum ullam necessitatibus quaerat recusandae
        corporis deserunt obcaecati odio laboriosam nobis aperiam eveniet eos
        explicabo. Vero aperiam porro libero perspiciatis corporis non
        perferendis eaque consequatur voluptas, dolorem soluta expedita
        assumenda architecto earum delectus harum explicabo tempora atque natus
        ab incidunt qui ipsum? Sed, laudantium! Mollitia dignissimos itaque et,
        consectetur, maiores laborum repellendus doloremque molestias fugiat
        odit, ea magni totam quia aperiam! Minus unde a consequatur quisquam,
        sapiente tenetur iste temporibus minima asperiores doloremque nostrum
        libero? Cumque, qui ab? Laudantium eveniet animi, accusamus facere quae
        aliquam dolores perspiciatis eaque eligendi repellendus natus illo
        voluptas commodi quia veritatis unde molestias nam, et itaque facilis!
        Excepturi, culpa rem laboriosam aliquam beatae nesciunt quam dignissimos
        neque, eaque numquam consequuntur perferendis tempore nisi quidem
        architecto eius quo? Beatae enim consequatur inventore non maiores
        praesentium maxime laudantium magni quasi repellendus. Incidunt
        obcaecati repellat eum non architecto sequi facere earum impedit harum
        exercitationem culpa totam, amet illum dolorem quidem nobis minus ea!
        Minima vitae veritatis magnam temporibus beatae optio nemo recusandae,
        quam ad accusantium fugit minus dolor officiis possimus ducimus
        blanditiis sed nesciunt. Adipisci tempora saepe id praesentium commodi
        iusto, vero quia doloribus, magni rerum minima corporis. Eveniet,
        pariatur modi. Nihil, autem! Labore sit praesentium a quia harum facere
        sunt qui. Consectetur, porro exercitationem quidem vel optio tempora
        temporibus nesciunt delectus quos, ea commodi tenetur amet! Alias,
        provident quos? Culpa nemo magnam, qui ut accusantium dolore, expedita
        neque, cumque possimus tempore et! Libero pariatur dolores mollitia?
        Voluptas, dolorum. Quae quibusdam veritatis iure explicabo consectetur?
        Non necessitatibus, voluptatibus nostrum perspiciatis mollitia,
        laboriosam eaque recusandae officiis libero quasi asperiores vero
        adipisci distinctio ratione nesciunt doloremque iste facere cum
        perferendis unde velit animi explicabo rem quis! Culpa totam nesciunt
        officia dolor, porro quos omnis suscipit explicabo voluptatibus natus
        voluptate repudiandae doloremque, molestias quia tempore sequi nisi
        sapiente libero incidunt veniam pariatur aperiam similique deleniti
        modi! Sunt molestiae omnis laborum incidunt, rerum dolorum dolore
        tempore! Eveniet, ullam numquam? In, error. Non doloribus ratione magnam
        vitae eius. Quo enim quas magnam, optio eveniet reiciendis repudiandae
        velit necessitatibus dolor architecto, consequuntur impedit, possimus
        molestiae nam? Fugit inventore voluptatibus laborum corporis dicta quod
        cumque asperiores sequi. Facere quidem quos blanditiis magni nam illo
        deleniti repudiandae illum excepturi recusandae distinctio nisi nihil
        incidunt architecto suscipit adipisci, corrupti, exercitationem ut? Ad
        incidunt qui autem labore aperiam consectetur nesciunt excepturi alias
        fugit, amet ipsum doloribus hic aut? Similique autem nesciunt itaque
        tenetur quibusdam tempore inventore veniam quod, minima, doloribus
        reprehenderit illum, aperiam excepturi recusandae temporibus! Facilis
        qui magnam iste ipsa quos autem eum, facere quas eveniet neque
        blanditiis minus porro assumenda ipsum omnis similique et iure quibusdam
        quam harum. Error impedit delectus quia, sapiente necessitatibus
        corrupti voluptate, ex minima aliquid neque illo? Ducimus quidem quasi
        impedit sunt consequuntur quos, nisi, aliquid itaque illum vero libero,
        voluptates consectetur eius voluptate! Delectus rem est odio at nostrum
        deleniti atque maxime tempora ipsum, mollitia voluptatibus dolor eius
        tenetur architecto velit modi sunt facilis similique dolorem enim
        pariatur deserunt, aperiam ullam numquam! Id illum natus doloribus nemo
        quae. Tempore sint assumenda eligendi temporibus, nisi error
        perspiciatis? Vel delectus fugit nulla consectetur ratione, facilis,
        ducimus officia voluptate laudantium quas eum nihil eaque illo earum
        laborum qui similique quo numquam dolorum sunt. Sit, praesentium.
        Praesentium, magni? Distinctio vero, in iste commodi facere
        necessitatibus reprehenderit sequi repudiandae quis illo saepe
        exercitationem molestiae libero voluptates modi eligendi possimus enim
        velit consectetur totam tempora! Error assumenda beatae aliquid qui nisi
        omnis optio expedita nihil accusantium, alias nam commodi blanditiis
        cumque itaque consectetur autem eveniet at praesentium libero illum!
        Rerum blanditiis odit atque laborum nulla odio officiis repellat.
        Necessitatibus ducimus delectus non error fugiat maxime sunt sit dolore
        sequi, asperiores explicabo, quibusdam animi illo laborum aliquid
        sapiente eos! Soluta, tempora mollitia perspiciatis cupiditate animi
        voluptate. Voluptatem quasi iste numquam itaque quibusdam blanditiis,
        earum voluptatum veritatis vitae dignissimos pariatur exercitationem
        ipsum cumque! Recusandae molestias atque iusto consequuntur nobis error
        excepturi, ea voluptatem cumque a. Tempora nam distinctio nobis omnis
        sunt ratione alias eaque id tempore nihil, repellat obcaecati cumque
        quibusdam, numquam quas nostrum culpa dignissimos esse iusto blanditiis!
        Eligendi voluptatum blanditiis magnam odio consequuntur expedita, iste
        dolorem odit asperiores reprehenderit provident deleniti aliquam
        similique consectetur ut excepturi. Doloribus harum ipsum cupiditate
        temporibus autem? Voluptate tempora facilis temporibus saepe soluta,
        dolor doloremque commodi dolores id quos sequi cum excepturi ad. Ducimus
        earum quibusdam sit suscipit magnam architecto commodi molestias. Quidem
        id repellendus iure eius? Laborum consequuntur provident consequatur
        voluptatum necessitatibus, quisquam incidunt eius ut earum officia,
        adipisci atque omnis possimus reiciendis facere, deserunt nihil nam
        facilis! Voluptates, laudantium eius quae recusandae quas totam dolorem?
        Debitis reiciendis rem distinctio voluptates rerum praesentium dicta
        dolore optio, cupiditate quos obcaecati, eum saepe sit, amet nesciunt
        cumque animi laudantium illo totam necessitatibus repellendus quidem
        incidunt deserunt. In aperiam, nihil inventore repellendus quam dolorem,
        consectetur accusantium quisquam veritatis, fugit delectus tempore
        autem? Quasi natus assumenda rem ipsa itaque consequuntur quos ea, atque
        unde enim facere modi repudiandae eum inventore dolorum minima,
        distinctio cumque impedit hic non. Alias illo ipsam quisquam. Qui a
        itaque quisquam facilis nam, labore dignissimos optio odit nihil
        blanditiis veniam dolore tempore. Reiciendis velit dolorem, neque
        repellat itaque accusamus fuga voluptatibus quisquam labore quas atque
        ad, deleniti nobis assumenda unde dolore suscipit, deserunt doloribus.
        Recusandae aliquam earum nesciunt nostrum quod qui tenetur in architecto
        necessitatibus commodi magni aspernatur autem ducimus, ipsum, totam
        quidem perferendis dolorum molestias deserunt. Sit dolore molestiae
        sequi eaque suscipit, inventore, quam laudantium autem, ipsam nesciunt
        dolores impedit molestias repellendus voluptatum saepe ullam deleniti.
        Eum harum accusantium aspernatur repellat doloremque. Similique?
      </p>
    </>
  );
}
