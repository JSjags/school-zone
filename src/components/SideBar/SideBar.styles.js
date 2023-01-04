import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 0 10px 10px;
  flex: 1;
  position: sticky;
  top: 0;

  .menu-btn {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    position: absolute;
    top: 10px;
    left: 100%;
    z-index: 100;
    background-color: var(--primary-color);
  }

  aside {
    display: block;
    background: var(--primary-color);
    border-radius: 5px 0 5px 5px;
    width: 100%;
    height: calc(100vh - 20px);
    position: -webkit-sticky;
    position: sticky;
    top: 10px;
    scrollbar-color: var(--primary-color);
    overflow: hidden;
    overflow-y: overlay;
    flex-direction: column;

    ::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
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

    .aside-header {
      height: clamp(200px, 20%, 250px);
      border-radius: 5px 0 5px 5px;
      position: sticky;
      box-shadow: 0 6px 6px var(--dark-gray);
      top: 0;
    }

    .aside-bg-cont {
      position: absolute;
      border-radius: 5px 0 5px 5px;
      width: 100%;
      height: 100%;
    }
    .aside-bg {
      width: 100%;
      height: 100%;
      border-radius: 5px 0 5px 5px;
      object-fit: cover;
    }

    .aside-bg-cont::after {
      content: "";
      display: block;
      color: white;
      width: 100%;
      height: 100%;
      background: linear-gradient(var(--deep-gray), transparent);
      position: absolute;
      border-radius: 5px 0 5px 5px;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .profile-name-cont {
      padding: 5px;
    }

    .profile-name {
      position: relative;
      z-index: 10;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      align-items: center;
      padding: 5px;
      border-radius: 5px;
      transition: background 300ms ease-in-out, box-shadow 300ms ease-in-out,
        border-radius 300ms ease-in-out;

      :hover {
        cursor: pointer;
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.3),
          rgba(255, 255, 255, 0.05)
        );
        background-size: 800% 800%;
        border-radius: 5px;
        box-shadow: inset 1px 1px rgba(255, 255, 255, 0.4),
          1px 1px rgba(0, 0, 0, 0.05);
        animation: background 5s linear infinite;
      }

      .avatar-logo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: white;
        border: 1px solid var(--mid-gray);
      }
      div {
        width: calc(100% - 55px);
        h3 {
          width: 100%;
          color: white;
          font-family: var(--garamond);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p {
          width: 100%;
          color: var(--mid-gray);
          font-family: var(--hind);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .school-address {
      width: 100%;
      display: flex;
      align-items: flex-start;
      padding: 0 0 0 5px;
      #address-cont {
        width: calc(100% - 2rem);
      }

      #country {
        width: 100%;
        color: white;
        font-family: var(--garamond);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      #address {
        width: 100%;
        color: var(--mid-gray);
        font-family: var(--hind);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  #lower-section {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 0 0 300px var(--background);
    min-height: 80%;
  }
  #menu {
    color: var(--white);
    font-family: var(--hind);
    font-size: 1rem;
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding: 5px;

    a {
      color: white;
      height: clamp(40px, calc(40px + 1vh), 50px);
      text-decoration: none;
      display: flex;
      align-items: center;
      padding-left: 5px;
      background: transparent;
      border-radius: 0;
      transition: all 200ms ease;
      box-shadow: inset 0 0 rgba(255, 255, 255, 0.3),
        inset 0 0 var(--light-gray);
      overflow: hidden;

      :hover {
        cursor: pointer;
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.3),
          rgba(255, 255, 255, 0.05)
        );
        background-size: 800% 800%;
        border-radius: 5px;
        box-shadow: inset 1px 1px rgba(255, 255, 255, 0.4),
          1px 1px rgba(0, 0, 0, 0.05);
        animation: background 5s linear infinite;
      }
    }
    li {
      flex: 1;
      list-style-type: none;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 5px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 300ms ease;
    }
    a.current {
      transition: all 200ms ease;
      background: var(--light-gray);
      border-radius: 5px;
      box-shadow: inset -1px -1px rgba(255, 255, 255, 0.3),
        inset 1px 1px var(--light-gray);
    }
    a::before {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border-radius: 0;
      background: var(--translucent);
      box-shadow: inset -1px -1px rgba(255, 255, 255, 0.3),
        inset 1px 1px var(--light-gray);
      transition: all 200ms ease;
    }
    a.current::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 70%;
      border-radius: 3px;
      background: var(--secondary-color);
      box-shadow: inset -1px -1px rgba(255, 255, 255, 0.3),
        inset 1px 1px var(--light-gray);
      transition: all 200ms ease;
    }
    .section-heading {
      color: var(--translucent-white);
      padding: 10px 0 0 10px;
      font-weight: lighter;
      font-family: var(--garamond);
      padding: 0 5px;
      margin: 20px 5px 0 0;
      padding: 5px;
      background: #dd712b;
    }
  }

  @keyframes background {
    0% {
      background-position: 0% 24%;
    }
    10% {
      background-position: 24% 64%;
    }
    30% {
      background-position: 85% 44%;
    }
    40% {
      background-position: 40% 66%;
    }
    50% {
      background-position: 78% 87%;
    }
    60% {
      background-position: 100% 54%;
    }
    70% {
      background-position: 65% 94%;
    }
    80% {
      background-position: 33% 33%;
    }
    90% {
      background-position: 56% 78%;
    }
    100% {
      background-position: 0% 24%;
    }
  }
`;
