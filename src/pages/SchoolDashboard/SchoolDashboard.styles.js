import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  min-height: 100vh;
  background: var(--background);
  margin-left: ${(props) => `${props.dynamicMarginLeft}px`};
  ${(props) =>
    props.isSuccess === false &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  width: 100%;

  main {
    flex: 1;
    border-radius: 10px;
    background: var(--background);
    width: 0;
    border: 1px solid var(--dark-mid-gray);

    .student-staff-cont {
      width: 100%;
      border-radius: 10px;
      padding: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      min-height: 200px;
    }
    .student-board {
      width: clamp(200px, calc(50% - 0.5rem), 1500px);
      min-height: 200px;
      max-height: 431px;
      padding: 0.5rem 1rem;
      border: 1px solid var(--dark-mid-gray);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      overflow: scroll;

      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        background: transparent;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 0 0 10px 0;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 5px;
        background: var(--secondary-color);
      }
      ::-webkit-scrollbar-corner {
        appearance: none;
      }
    }
    .task-board-cont {
      width: clamp(200px, calc(50% - 0.5rem), 1500px);
      height: inherit;
      border-radius: 10px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 1rem;
    }
    .task-board {
      border: 1px solid var(--dark-mid-gray);
      padding: 0.5rem 1rem;
      border-radius: 10px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-height: 431px;

      .piechart-cont {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .piechart {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }
      .chart {
        width: clamp(270px, 60%, 480px);
      }
      .chart-details {
        width: clamp(100px, 40%, 480px);
        height: 100%;
        backdrop-filter: invert(0.05);
        border-radius: 10px;

        h2 {
          text-align: center;
        }
        p {
          font-size: 1.5rem;
          color: var(--text);
          font-family: var(--hind);
          text-align: center;
        }
      }
      .tasks-details {
        margin-top: 10px;
        width: 100%;
        height: 149px;
        backdrop-filter: invert(0.05);
        border-radius: 5px;
        overflow: scroll;

        .task-details-header {
          position: sticky;
          top: 0;
          background-color: var(--translucent-white);
          padding: 0.5rem;
          border-radius: 5px;
          backdrop-filter: blur(2px);
          z-index: 10;
        }

        ::-webkit-scrollbar {
          width: 5px;
          height: 5px;
          background: transparent;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 0 0 10px 0;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          height: 5px;
          background: var(--secondary-color);
        }
        ::-webkit-scrollbar-corner {
          appearance: none;
        }

        .tasks {
          padding: 0.5rem 0.5rem 0.5rem 1rem;
          -webkit-margin-bottom-collapse: collapse;
        }
      }

      .no-tasks {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          display: flex;
          width: clamp(50px, 20%, 60px);
          margin-top: 10px;
        }
        p {
          font-size: 0.8rem;
          margin-top: 10px;
          color: var(--text);
          font-family: var(--hind);
        }
        .more-btn {
          align-self: flex-end;
          margin-top: 0;
        }
      }
      .single-btn-cont {
        display: flex;
        justify-content: flex-end;
      }
    }
    .finance-cont {
      width: 100%;
      border-radius: 10px;
      padding: 0 1rem 0.5rem;
      min-height: 200px;
    }
    .finance-board {
      width: clamp(200px, 100%, 1500px);
      min-height: 200px;
      padding: 1rem;
      border: 1px solid var(--dark-mid-gray);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      overflow: overlay;

      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        background: transparent;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 0 0 10px 0;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 5px;
        background: var(--secondary-color);
      }
      ::-webkit-scrollbar-corner {
        appearance: none;
      }
    }
    .cont {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 10px;
    }
    .fin-cont {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: clamp(10px, 5vh, 20px);
    }
    .statement {
      width: clamp(300px, 30%, 1500px);
    }
    .statements {
      justify-content: space-between;
      padding: 1vmax 0 2vmax;
      width: clamp(200px, 100%, 1500px);
      display: flex;
      row-gap: 20px;
      flex-direction: column;
      backdrop-filter: invert(0.05);
      padding-left: 10px;
      border-radius: 20px;

      .rev,
      .exp {
        width: (200px, 100%, 1500px);
        /* min-height: 70px; */
        display: flex;
        flex-direction: column;
        text-align: left;

        p {
          font-size: 1.5rem;
          font-family: var(--hind);
          color: var(--text);
          text-align: center;
          letter-spacing: 1px;
        }
      }

      .val {
        width: (200px, 100%, 1500px);
        min-height: 30px;
        display: flex;
        flex-direction: column;
        text-align: left;

        p {
          font-size: 1.5rem;
          font-family: var(--hind);
          color: var(--text);
          text-align: center;
          letter-spacing: 1px;
        }
      }
    }
    .cont.students {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 10px;
      gap: 10px;
    }
    .statement.students {
      width: clamp(200px, 100%, 1500px);
      display: flex;
      flex-wrap: wrap;
      row-gap: 10px;
      justify-content: space-between;
    }
    .statements.students {
      justify-content: space-between;
      padding: 0.5vmax 0;
      width: fit-content;
      display: flex;
      column-gap: 10px;
      flex-direction: row;
      backdrop-filter: invert(0.05);
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 10px;

      .val {
        width: (200px, 100%, 1500px);
        min-height: 30px;
        display: flex;
        flex-direction: column;
        text-align: left;

        h3 {
          font-size: 1rem;
        }
        p {
          font-size: 1rem;
          font-family: var(--hind);
          color: var(--text);
          text-align: center;
          letter-spacing: 1px;
        }
      }
    }
    .students-column-box {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 100%;

      .linechart {
        width: clamp(250px, 60%, 300px);
        padding: 10px;
        border-radius: 10px;
      }
      .recent {
        width: clamp(100px, 40%, 1000px);
        padding: 10px;
        border-left: 1px solid var(--dark-mid-gray);

        h3 {
          font-size: 0.8rem;
        }
      }
      .passport-cont {
        width: 100%;
        margin-top: 5px;
        height: clamp(150px, 20vmax, 200px);
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 10px;

        .passport {
          width: 100%;
          height: 100%;
          position: absolute;
          border-radius: 5px;
          top: 0;
          left: 100%;
        }
      }

      .no-student-img {
        width: 100%;
      }
      .no-student-text {
        color: var(--text);
        font-family: var(--hind);
        text-align: center;
        font-size: 0.8rem;
        margin-top: 10%;
      }
      .students-slider {
        display: grid;
        grid-row-gap: 100%;
        height: 100%;

        div {
          height: clamp(150px, 20vmax, 200px);
          position: relative;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
        p {
          width: 100%;
          position: absolute;
          bottom: 0;
          text-align: center;
          font-family: var(--hind);
          color: var(--text);
          padding: 3px;
          background: var(--translucent-white);
          border-radius: 5px;
          width: 100%;
          filter: invert(1);
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .recent-records {
      padding: 1vmax 0 2vmax;
      width: clamp(300px, 30%, 1500px);
      height: clamp(200px, 25vmax, 400px);
      backdrop-filter: invert(0.05);
      padding: 10px;
      border-radius: 20px;
      overflow: overlay;

      ::-webkit-scrollbar {
        appearance: none;
        width: 5px;
        height: 5px;
      }
      ::-webkit-scrollbar-track {
        width: 3px;
        height: 3px;
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb {
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background: var(--secondary-color);
      }

      .records-cont {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        row-gap: 10px;

        .financial_item {
          min-height: 40px;
          background-color: red;
          border-radius: 10px;
        }

        .revenue {
          background-color: var(--lime);
          padding: 5px;

          .type {
            color: var(--lime);
          }
        }

        .expense {
          background-color: var(--red);
          padding: 5px;

          .type {
            color: var(--red);
          }
        }

        .financial_item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .type {
          padding: 5px 10px;
          font-family: var(--garamond);
          background-color: var(--white);
          border-radius: 20px;
          font-weight: bolder;
          width: fit-content;
          font-size: 0.8rem;
        }
        .value {
          font-family: var(--hind);
          color: var(--white);
        }
        .statement {
          width: 100%;
          font-family: var(--hind);
          color: var(--white);
          font-size: 0.8rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 0;
          margin-top: 3px;
        }
      }

      .no-records {
        width: 100%;
        height: 100%;
        align-self: center;
        justify-self: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;

        img {
          width: clamp(40px, 30%, 100px);
        }

        p {
          color: var(--text);
          font-family: var(--hind);
          line-height: 100%;
          vertical-align: middle;
        }
      }
    }
    .pie-chart {
      width: clamp(300px, 38%, 1500px);
    }
    .more-btn {
      width: fit-content;
      text-decoration: none;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      align-self: flex-end;
      gap: 10px;
      margin-top: 10px;
      color: var(--primary-color);
      cursor: pointer;
      position: relative;
      transition: all 300ms ease;
      white-space: nowrap;

      span {
        font-family: var(--garamond);
        font-size: 1rem;
      }

      ::after {
        content: "";
        display: block;
        width: 0;
        height: 4px;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: var(--secondary-color);
        transition: all 300ms ease;
        z-index: -1;
      }

      :hover {
        transform: scale(1.1);

        ::after {
          width: 100%;
        }
      }
    }
    .others-cont {
      width: 100%;
      border-radius: 10px;
      padding: 0.5rem 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .recent-articles {
      width: clamp(200px, calc(50% - 0.5rem), 1500px);
      min-height: 150px;
      padding: 1rem 1rem 0.5rem;
      border: 1px solid var(--dark-mid-gray);
      border-radius: 10px;

      .articles-cont {
        height: 124px;
        overflow: hidden;
      }

      .articles-slider {
        display: flex;
        flex-direction: column;
        row-gap: 100%;
        height: 100%;

        div {
          height: 100px;
          position: relative;
        }
      }

      .article {
        width: 100%;
        height: 100%;
        display: flex;
        margin: 1rem 0 0.5rem;
        backdrop-filter: invert(0.05);
        border-radius: 5px;

        .img-cont {
          width: 30%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
          }
        }
        .article-details {
          display: flex;
          flex-direction: column;
          width: 70%;
          padding: 5px 10px;

          a {
            display: block;
            color: var(--primary-color);
            font-family: var(--garamond);
            font-weight: 500;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 1.1rem;
            text-decoration: none;
            position: relative;
            transition: all 300ms ease;

            ::after {
              content: "";
              display: block;
              width: 0;
              height: 4px;
              position: absolute;
              bottom: 1px;
              left: 0;
              background: var(--secondary-color);
              transition: all 300ms ease;
              z-index: -1;
            }

            :hover {
              transform: scale(1.05);

              ::after {
                width: 100%;
              }
            }
          }
          p.summary {
            color: var(--text);
            font-family: var(--hind);
            margin-top: 10px;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 0.9rem;
          }
          p.timestamp {
            color: var(--lime);
            font-family: var(--hind);
            margin-top: 20px;
            font-size: 0.8rem;
          }
        }
      }
      .btns-cont {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        flex-wrap: wrap;

        .more-btn:nth-child(1) {
          gap: 2px;
        }
      }
      .no-article {
        display: flex;
        flex-direction: column;
        width: 100%;

        img {
          display: block;
          margin: 10px auto;
          width: clamp(80px, 50%, 100px);
        }

        p {
          color: var(--text);
          font-family: var(--hind);
          padding: 0.25rem 0;
          text-align: center;
        }

        a {
        }
      }
    }

    .recent-arts {
      width: clamp(100px, 100%, 1000px);
      border-left: 1px solid var(--dark-mid-gray);

      h3 {
        font-size: 0.8rem;
      }
    }
    .upcoming-schedules {
      width: clamp(200px, calc(50% - 0.5rem), 1500px);
      min-height: 200px;
      padding: 1rem 1rem 0.5rem;
      border: 1px solid var(--dark-mid-gray);
      border-radius: 10px;

      .schedules-cont {
        display: grid;

        .more-btn {
          justify-self: end;
        }
      }
      .schedules-slider-cont {
        height: 100px;
        overflow: hidden;
        margin: 1rem 0 0.5rem;
      }
      .schedules-slider {
        display: flex;
        flex-direction: column;
        row-gap: 100px;
        height: 100%;

        div {
          height: 100px;
          position: relative;
        }
      }
      .schedule-details {
        min-height: 100px;
        overflow: hidden;
        backdrop-filter: invert(0.05);
        border-radius: 5px;
        padding: 5px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 5px;

        p {
          display: flex;
          align-items: flex-end;
          gap: 5px;
          flex-wrap: nowrap;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          span:nth-child(1) {
            color: var(--primary-color);
            font-family: var(--garamond);
            font-weight: 500;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 1.1rem;
            text-decoration: none;
            position: relative;
            transition: all 300ms ease;
          }
          span:nth-child(2) {
            color: var(--text);
            font-family: var(--hind);
            font-size: 0.9rem;
          }
        }
      }

      .no-schedule {
        display: flex;
        flex-direction: column;
        width: 100%;

        img {
          display: block;
          margin: 10px auto;
          width: clamp(120px, 50%, 140px);
        }

        p {
          color: var(--text);
          font-family: var(--hind);
          padding: 0.25rem 0;
          text-align: center;
        }

        a {
        }
      }

      .btns-cont {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 1rem;
      }
    }

    @keyframes slideup2 {
      0% {
        transform: translateY(100%);
      }
      5% {
        transform: translateY(0%);
      }
      45% {
        transform: translateY(0%);
      }
      55% {
        transform: translateY(-200%);
      }
      95% {
        transform: translateY(-200%);
      }
      100% {
        transform: translateY(-300%);
      }
    }
    @keyframes slideup3 {
      0% {
        transform: translateY(100%);
      }
      2.5% {
        transform: translateY(0%);
      }
      30% {
        transform: translateY(0%);
      }
      35% {
        transform: translateY(-200%);
      }
      65% {
        transform: translateY(-200%);
      }
      70% {
        transform: translateY(-400%);
      }
      97.5% {
        transform: translateY(-400%);
      }
      100% {
        transform: translateY(-500%);
      }
    }
    @keyframes slideup4 {
      0% {
        transform: translateY(100%);
      }
      2.5% {
        transform: translateY(0%);
      }
      25% {
        transform: translateY(0%);
      }
      30% {
        transform: translateY(-200%);
      }
      50% {
        transform: translateY(-200%);
      }
      55% {
        transform: translateY(-400%);
      }
      75% {
        transform: translateY(-400%);
      }
      80% {
        transform: translateY(-600%);
      }
      97.5% {
        transform: translateY(-600%);
      }
      100% {
        transform: translateY(-700%);
      }
    }
    @keyframes slideup5 {
      0% {
        transform: translateY(100%);
      }
      2.5% {
        transform: translateY(0%);
      }
      20% {
        transform: translateY(0%);
      }
      25% {
        transform: translateY(-200%);
      }
      40% {
        transform: translateY(-200%);
      }
      45% {
        transform: translateY(-400%);
      }
      60% {
        transform: translateY(-400%);
      }
      65% {
        transform: translateY(-600%);
      }
      80% {
        transform: translateY(-600%);
      }
      85% {
        transform: translateY(-800%);
      }
      97.5% {
        transform: translateY(-800%);
      }
      100% {
        transform: translateY(-900%);
      }
    }

    @media screen and (max-width: 425px) {
      .statement {
        width: clamp(200px, 100%, 1500px);
      }
      .pie-chart {
        width: clamp(200px, 100%, 1500px);
      }
      .recent-records {
        width: clamp(200px, 100%, 1500px);
      }
    }
    @media screen and (max-width: 768px) {
      .student-board {
        width: clamp(200px, 100%, 1500px);
      }
      .task-board-cont {
        width: clamp(200px, 100%, 1500px);
      }
      .recent-articles,
      .upcoming-schedules {
        width: clamp(100px, 100%, 1500px) !important;
      }
    }
    @media screen and (max-width: 1100px) {
      .linechart {
        padding: 10px;
        border-radius: 10px;
      }

      .statements.students {
        width: 100%;

        .val {
          align-items: center;
          width: 100%;

          h3 {
            font-size: 1rem;
            text-align: center;
          }
          p {
            text-align: center;
          }
        }
      }
      .recent {
        width: 200px !important;
        border-left: none !important;
      }
      .recent-records {
        width: clamp(300px, 100%, 1500px);
      }
      .recent-arts {
        border-left: none !important;
      }
      .students-column-box {
        justify-content: center;
      }
      .cont {
        width: clamp(200px, 100%, 670px) !important;
        flex-wrap: nowrap;
      }
      .fin-cont {
        justify-content: space-around;
      }
    }
    @media screen and (max-width: 1440px) {
      .task-board {
        overflow: overlay;

        ::-webkit-scrollbar {
          width: 5px;
          height: 5px;
          background: transparent;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 0 0 10px 0;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          height: 5px;
          background: var(--secondary-color);
        }
        ::-webkit-scrollbar-corner {
          appearance: none;
        }
      }
    }
  }

  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;

    img {
      width: 25%;
    }
    p {
      font-family: var(--hind);
      font-weight: 500;
      color: var(--text);
    }
  }
`;

export const TaskItem = styled.li`
  border-radius: 5px;
  margin-bottom: 5px;
  border: 1px solid ${(props) => props.color[0]};
  background: ${(props) => props.color[1]};
  padding: 0.5rem;

  ::marker {
    color: ${(props) => props.color[0]};
    display: block;
  }

  .subject,
  .description {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .task-title,
  .task-description {
    display: block;
    color: var(--primary-color);
    font-family: var(--garamond);
    white-space: nowrap;
    font-size: 0.9rem;
  }
  span:nth-child(2) {
    display: block;
    color: var(--text);
    font-family: var(--hind);
    padding: 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.9rem;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  color: var(--text);
  gap: 2rem;
  font-family: var(--hind);
  font-size: 1.2rem;

  /* .button-group {
    display: flex;
    align-items: center;
    gap: 40px;

    button {
      border: none;
      padding: 0.5rem 1rem;
      background: var(--dark-mid-gray);
      font-size: 1rem;
      border-radius: 1.5rem;
      font-family: var(--hind);
      cursor: pointer;
      transition: all 600ms ease-in-out;

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  } */
`;
export const ErrorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  color: red;
  gap: 2rem;
  font-family: var(--hind);
  font-size: 1.2rem;

  .button-group {
    display: flex;
    align-items: center;
    gap: 40px;

    button {
      border: none;
      padding: 0.5rem 1rem;
      background: var(--translucent-white);
      backdrop-filter: invert(0.3);
      font-size: 1rem;
      border-radius: 1.5rem;
      font-family: var(--hind);
      cursor: pointer;
      transition: all 300ms ease-in-out;
      color: var(--text);

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: var(--white);
      }
    }
  }
`;
