function Avatar({person, size = 70, profession, awardNumber, award, discovered}){
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageID + '.jpg'}
      alt= {person.name}
      width={size}
      height={size}
      profession={profession}
      awardNumber={awardNumber}
      award={award}
      discovered={discovered}
    />
  )
}

function Profile({scientist, size=100}){
  return(
    <section className = "profile" >
      <h2>Maria Skłodowska-Curie</h2>
      <img
        className="avatar"
        src={'https://i.imgur.com/' + scientist.imageID + '.jpg'}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>{'Awards:' + scientist.awardNumber}</b>
          {scientist.award}
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovered}
        </li>
      </ul>
    </section >
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        scientist={{ name: 'Maria Skłodowska-Curie', imageID: `szV5sdGs`, profession: 'physicist and chemist', awardNumber: 4, award: `Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal`, discovered: 'polonium(element)'}}
        size={70} />
      <Profile
        scientist={{ name: 'Katsuko Saruhashi', imageID: `YfeOqp2s`, profession: 'geochemist', awardNumber: 4, award: `Miyake Prize for geochemistry, Tanaka Prize`, discovered: 'a method for measuring carbon dioxide in seawater'}}
        size={70} />
    </div>
  );
}