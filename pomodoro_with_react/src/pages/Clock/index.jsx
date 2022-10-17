import { ClockPanel } from "../../components/ClockPanel";
import { useClock } from "./useClock";
import * as S from "./styles";
import { TitleAction } from "../../components/TitleAction";
import { ButtonControl } from "../../components/ButtonControl";

import { BsFillPlayFill } from "react-icons/bs";

export function Clock() {
  const { navigate, minutes, seconds, start, pause, step, listTask } =
    useClock();
  return (
    <S.BodyClock>
      <S.Container>
        <ClockPanel
          minutes={`${minutes < 10 ? "0" : ""}${minutes}`}
          seconds={`${seconds < 10 ? "0" : ""}${seconds}`}
        />
        <div>
          <TitleAction title={`| ${step}`} />
          <S.Box>
            <ButtonControl text={"Start"} onClick={start} />
            <ButtonControl text={"Pause"} onClick={pause} />
            <ButtonControl text={"Settings"} onClick={() => navigate("/clockConfig")} />
          </S.Box>
        </div>
      </S.Container>

      <S.TableCustom>
        <thead>
          <tr>
            <S.Th>Tasks</S.Th>
            <S.Th>Time</S.Th>
          </tr>
        </thead>
        <tbody>
          {listTask.map((item) => (
            <tr>
              <S.Td>{item.title}</S.Td>
              <S.Td>{item.time}</S.Td>
            </tr>
          ))}
        </tbody>
      </S.TableCustom>
    </S.BodyClock>
  );
}
