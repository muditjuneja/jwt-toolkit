import styled from 'styled-components';

const leftContentWidth = '31.5rem';

export const JwtContainerStyled = styled.div`
  &.jwt-decoder-container {
    background-color: ${(props) => props.theme.colors.dark[1000]};

    .inner-container {
      padding-block: 16.5rem 18rem;
      width: 100%;
      max-width: 107.5rem;
      margin-inline: auto;
      color: ${(props) => props.theme.colors.light[900]};
    }
  }

  .title {
    font-size: 3.2rem;
    font-weight: 700;
    margin: 0;
    margin-block-end: 3rem;
  }

  .common-container {
    border-radius: ${(props) => props.theme.borderRadius.medium};
    border: 1px solid ${(props) => props.theme.colors.grey[1000]};
  }

  .inner-content {
    padding: 2.5rem;
  }

  .title-band {
    font-weight: 600;
    padding: 0.9rem 1.6rem;
    background-color: ${(props) => props.theme.colors.grey[850]};
    &.bt-inherit {
      border-top-right-radius: inherit;
      border-top-left-radius: inherit;
    }
  }

  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + .code {
      height: 15rem;
      word-break: break-all;
    }
  }

  #payload + .code {
    height: 22rem;
  }

  #signing-key + .code {
    word-break: break-all;
  }

  .decoder-main-container {
    display: flex;
    aside.decoded {
      width: ${leftContentWidth};
      margin-right: 2rem;
    }

    .decoded {
      display: flex;
      flex-direction: column;
      .content {
        word-break: break-word;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .token {
          line-height: 2.4rem;
        }

        .copy-btn {
          border: 1px solid ${(props) => props.theme.colors.green[1000]};
          padding-block: 1rem;
          text-align: center;
          width: 100%;
          font-variation-settings: 'wght' 500;
          border-radius: 1rem;
          color: ${(props) => props.theme.colors.green[900]};
          background-color: ${(props) => props.theme.colors.green[1000]}1A;
          cursor: pointer;
          img {
            margin-left: 0.5rem;
          }
        }
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .input-container {
      flex: 1;
    }
  }

  .code {
    font-family: ${(props) => props.theme.fontFamily.menlo};
    overflow-y: auto;
  }

  .note-container-outer {
    margin-left: calc(${leftContentWidth} + 2rem);
    margin-block: 1.1rem 6rem;
    text-align: center;
    border-color: ${(props) => props.theme.colors.orange[1000]};

    .note {
      padding-block: 1.1rem;
      background-color: ${(props) => props.theme.colors.orange[1000] + '0a'};
      b {
        color: ${(props) => props.theme.colors.orange[1000]};
      }
    }
  }

  hr {
    border-color: ${(props) => props.theme.colors.grey[750]};
    margin-block-end: 0;
  }

  .read-more-container {
    display: flex;
    justify-content: center;
    span[role='button'] {
      cursor: pointer;
      padding: 1.2rem 3rem;
      background-color: ${(props) => props.theme.colors.dark[800]};
      border-radius: 0 0 2.5rem 2.5rem;
    }

    .down-chevron {
      filter: brightness(2);
    }
  }

  textarea.code {
    height: 100%;
    width: 100%;
    border: none;
    background-color: inherit;
    color: inherit;
    resize: none;
    outline: none;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    &.jwt-decoder-container main.inner-container {
      padding-block: 3.5rem;
    }

    .decoder-main-container {
      flex-direction: column;
      aside.decoded {
        width: 100%;

        .content .token {
          height: 60vh;
        }
      }
    }

    .tab-container{
      margin-block-end: .9rem;
    }

    .note-container-outer {
      margin-left: 0;
      padding: 1.2rem 1.6rem;
      text-align: left;
    }

    .hero-container {
      padding-inline: 2.6rem;
    }
  }
`;

export const ExplanationContainerStyled = styled.article`
  &.explanation-content-container {
    section {
      margin-block-start: 6rem;
    }
  }

  ul {
    padding: 0;
  }

  ul.parts-of-jwt {
    & > li {
      display: flex;
      margin-bottom: 1.5rem;
      & > :not(:last-child) {
        margin-right: 0.5rem;
      }
      span.header {
        color: ${(props) => props.theme.colors.red[200]};
      }

      span.payload {
        color: ${(props) => props.theme.colors.purple[200]};
      }

      span.signature {
        color: ${(props) => props.theme.colors.blue[200]};
      }

      .description ul {
        list-style: disc inside;
      }
    }
  }

  .structure-img {
    width: 100%;
    position: relative;
    height: 55rem;
    margin: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    & ul.parts-of-jwt li {
      & > :not(:last-child) {
        margin-right: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .3rem;
  &&& {
    border-radius: .7rem;
  }
`;

export const TabOption = styled.div<{ isSelected?: boolean }>`
  flex: 1;
  padding: .7rem 2.2rem;
  text-align: center;
  line-height: 1.875rem;
  color: ${props=>props.theme.colors.grey[810]};
  border-radius: .7rem;

  ${props=>props.isSelected && `
    background-color: ${props.theme.colors.light[1000]}
  `}
`;

export default JwtContainerStyled;
