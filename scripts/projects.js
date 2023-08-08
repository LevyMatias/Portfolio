fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    let output = "";
    for (let item of projects) {
      const stackIcons = item.stackIcon.map(icon => {
        const iconEntries = Object.entries(icon);
        const svgIcons = iconEntries.map(([key, value]) => {
          return `<img src="${value}" alt="${key}" class="svg-icon ${key}-icon">`;
        }).join('');
        return svgIcons;
      }).join('');

      output += `
        <div class="experience__box reveal active">
            <div class="experience__box__img">
                <img class="experience__imagem" src="${item.imageUrl}" alt="netflix clone">
            </div>

            <div class="experience__description">
                <h3 class="experience__description__title">
                ${item.title}
                <span class="experience__school">${item.school}</span>
                </h3>
                <p class="experience__paragraph">${item.description}
                </p>

                <div class="experience__about">
                    <ul class="experience__about__stack">
                        ${stackIcons}
                    </ul>

                    <ul class="experience__btns">
                        <a class="experience__link" href="${item.github}" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        </a>
                        <a class="experience__link" href="${item.projectUrl}" target="_blank">
                        <i class="experience__icon fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
      `;
    }

    const experienceWrapper = document.querySelector(".experience__wrapper");
    experienceWrapper.innerHTML = output;
    experienceWrapper.appendChild(addMoreProjectsButton());
  })
  .catch(error => console.error('Erro na requisição:', error));

const addMoreProjectsButton = () => {
    const moreProjectsButton = document.createElement('div');
    moreProjectsButton.classList.add('experience__btn__projects');

    const link = document.createElement('a');
    link.classList.add('experience__btn__link');
    link.href = 'https://github.com/LevyMatias';
    link.target = '_blank';
    link.textContent = 'Mais Projetos';
    moreProjectsButton.appendChild(link);
    return moreProjectsButton;
}