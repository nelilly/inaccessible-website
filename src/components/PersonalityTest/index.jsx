import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  personalityTest,
  screen,
  questionTitle,
  show,
  hide,
} from './style.module.css';

const SUN = 'Sun';
const MERCURY = 'Mercury';
const VENUS = 'Venus';
const MOON = 'Moon';
const MARS = 'Mars';
const JUPITER = 'Jupiter';
const SATURN = 'Saturn';
const URANUS = 'Uranus';
const NEPTUNE = 'Neptune';
const PLUTO = 'Pluto';

const SUN_MESSAGE = 'The Sun is not a planet.';
const MERCURY_MESSAGE = 'You’re pretty hot.';
const VENUS_MESSAGE = 'You are the second-brightest natural object in the night sky after the Moon, You are so bright that you can cast shadows and on rare occasions are visible to the naked eye in broad daylight.';
const MOON_MESSAGE = 'You’re larger than any dwarf planet, yet the moon is not a planet.';
const MARS_MESSAGE = 'You’re pretty similar to Earth, but more red.';
const JUPITER_MESSAGE = 'You are a gas giant and don’t have a solid surface. Your atmosphere is made up of mostly hydrogen gas and helium gas, like the sun. You are covered in thick red, brown, yellow and white clouds. You have many orbiters.';
const SATURN_MESSAGE = 'You surround yourself with a ring of ice and your core is composed of iron–nickel and rock.';
const URANUS_MESSAGE = 'You have a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.';
const NEPTUNE_MESSAGE = 'You are dark, cold, and very windy. You are made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Your atmosphere is made of hydrogen, helium, and methane.';
const PLUTO_MESSAGE = 'You are a dwarf planet in the Kuiper belt, beyond the orbit of Neptune. You feel more comfortable focusing on yourinner thoughts and ideas, rather than what’s happening externally. You enjoy spending time alone and on the fringes, rather than large groups or crowds.';

// numberOfMoons
// const MERCURY = 0;
// const VENUS = 0;
// const PLUTO = 1;
// const MARS = 2;
// const NEPTUNE = 3;
// const URANUS = 15;
// const JUPITER = 16;
// const SATURN = 20;

const isSign = (begins, ends, birthday) => (
  Date.parse(birthday) <= Date.parse(ends) && Date.parse(birthday) >= Date.parse(begins)
);

const isAries = (birthday) => isSign('March 21', 'April 19', birthday);
const isTaurus = (birthday) => isSign('April 20', 'May 20', birthday);
const isGemini = (birthday) => isSign('May 21', 'June 20', birthday);
const isCancer = (birthday) => isSign('June 21', 'July 22', birthday);
const isLeo = (birthday) => isSign('July 23', 'August 22', birthday);
const isVirgo = (birthday) => isSign('August 23', 'September 22', birthday);
const isLibra = (birthday) => isSign('September 23', 'October 22', birthday);
const isScorpio = (birthday) => isSign('October 23', 'November 21', birthday);
const isSagittarius = (birthday) => isSign('November 22', 'December 21', birthday);
const isCapricorn = (birthday) => isSign('December 22', 'January 19', birthday);
const isAquarius = (birthday) => isSign('January 20', 'February 18', birthday);
const isPisces = (birthday) => isSign('February 19', 'March 20', birthday);

const whichSign = (birthday) => {
  switch (true) {
    case isAries(birthday):
      return {
        sign: 'Aries',
        planet: MARS,
        message: MARS_MESSAGE
      };
    case isTaurus(birthday):
      return {
        sign: 'Taurus',
        planet: VENUS,
        message: VENUS_MESSAGE
      };
    case isGemini(birthday):
      return {
        sign: 'Gemini',
        planet: MERCURY,
        message: MERCURY_MESSAGE
      };
    case isCancer(birthday):
      return {
        sign: 'Cancer',
        planet: MOON,
        message: MOON_MESSAGE
      };
    case isLeo(birthday):
      return {
        sign: 'Leo',
        planet: SUN,
        message: SUN_MESSAGE
      };
    case isVirgo(birthday):
      return {
        sign: 'Virgo',
        planet: MERCURY,
        message: MERCURY_MESSAGE
      };
    case isLibra(birthday):
      return {
        sign: 'Libra',
        planet: VENUS,
        message: VENUS_MESSAGE
      };
    case isScorpio(birthday):
      return {
        sign: 'Scorpio',
        planet: PLUTO,
        message: PLUTO_MESSAGE
      };
    case isSagittarius(birthday):
      return {
        sign: 'Sagittarius',
        planet: JUPITER,
        message: JUPITER_MESSAGE
      };
    case isCapricorn(birthday):
      return {
        sign: 'Capricorn',
        planet: SATURN,
        message: SATURN_MESSAGE
      };
    case isAquarius(birthday):
      return {
        sign: 'Aquarius',
        planet: URANUS,
        message: URANUS_MESSAGE
      };
    case isPisces(birthday):
      return {
        sign: 'Pisces',
        planet: NEPTUNE,
        message: NEPTUNE_MESSAGE
      };
    default:
      return {
        sign: 'Capricorn',
        planet: SATURN,
        message: SATURN_MESSAGE
      };
  }
};

const PersonalityTest = ({ title }) => {
  const [step, setStep] = useState(0);
  const [birthDate, setBirthDate] = useState('');
  const [birthMonth, setBirthMonth] = useState('January');
  const [temp, setTemp] = useState('');
  const [social, setSocial] = useState('');
  const [quiz, setQuiz] = useState({});
  const [personality, setPersonality] = useState({});
  const birthMonthRef = useRef(null);
  const birthDateRef = useRef(null);

  const handleAnswer = (answer) => {
    setStep(step + 1);
    setQuiz(Object.assign(answer, quiz));
    quiz.birthdate && setPersonality(whichSign(quiz.birthdate));
  };

  const startOver = () => {
    setStep(0);
    setBirthDate('');
    setBirthMonth('January');
    setTemp('');
    setSocial('');
    setQuiz([]);
    setPersonality({});
  }

  return (
    <article className={personalityTest}>
      <h2>{title}</h2>
      <section>
        <form action="" method="get">
          <div className={`${screen} ${step === 0 ? show : hide}`}>
            <p className={questionTitle}>Answer these questions to find your planet personality.</p>
            <button type="button" onClick={() => setStep(1)}>Start</button>
          </div>
          <div className={`${screen} ${step === 1 ? show : hide}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <p className={questionTitle}>When is your birthday?</p>
              <select name="birthMonth" ref={birthMonthRef} value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <input type="number" name="birthDate" ref={birthDateRef} min="1" max="31" placeholder="Enter date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            </div>
            <button type="button" disabled={!birthDate} onClick={() => handleAnswer({ birthdate: `${birthMonthRef.current.value} ${birthDateRef.current.value}` })}>Next</button>
          </div>

          <div className={`${screen} ${step === 2 ? show : hide}`}>
            <div>
              <p className={questionTitle}>Do you prefer the warmth or the cold?</p>
              <label className="container">Warm
                <input name="temp" type="radio" value="warm" checked={temp === 'warm'} onChange={e => setTemp(e.target.value)} />
                <span className="radio"></span>
              </label>
              <label className="container">Cold
                <input name="temp" type="radio" value="cold" checked={temp === 'cold'}  onChange={e => setTemp(e.target.value)} />
                <span className="radio"></span>
              </label>
            </div>
            <button type="button" disabled={!temp} onClick={() => handleAnswer({ temperature: temp })}>Next</button>
          </div>

          <div className={`${screen} ${step === 3 ? show : hide}`}>
            <div>
              <p className={questionTitle}>Are you an introvert or an extrovert?</p>
              <label className="container">Introvert
                <input name="social" type="radio" value="introvert" checked={social === 'introvert'} onChange={e => setSocial(e.target.value)} />
                <span className="radio"></span>
              </label>
              <label className="container">Extrovert
                <input name="social" type="radio" value="extrovert" checked={social === 'extrovert'} onChange={e => setSocial(e.target.value)} />
                <span className="radio"></span>
              </label>
            </div>
            <button type="button" disabled={!social} onClick={() => handleAnswer({ socialType: social })}>Next</button>
          </div>
        </form>

        <div className={`${screen} ${step === 4 ? show : hide}`}>
          <div>
            <h2>You are <a href={`https://en.wikipedia.org/wiki/${personality?.planet}`}>{personality?.planet}</a></h2>
            <p>{personality?.message}</p>
          </div>

          <button type="button" onClick={startOver}>Start Over</button>
        </div>
      </section>
    </article>
  );
};

export default PersonalityTest;

PersonalityTest.propTypes = {
  title: PropTypes.string.isRequired,
};
