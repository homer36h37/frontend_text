// Пагинация
document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.content'); 
  const itemsPerPage = 10;
  let currentPage = 0;
  const items = Array.from(content.getElementsByTagName('tr')).slice(1);

function showPage(page) {
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  items.forEach((item, index) => {
    item.classList.toggle('hidden', index < startIndex || index >= endIndex);
  });
  updateActiveButtonStates();
}

function createPageButtons() {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginationContainer = document.createElement('div');
  const paginationDiv = document.body.appendChild(paginationContainer);
  paginationContainer.classList.add('pagination');

  for (let i = 0; i < totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i + 1;
    pageButton.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
      updateActiveButtonStates();
    });

      content.appendChild(paginationContainer);
      paginationDiv.appendChild(pageButton);
    }
}

function updateActiveButtonStates() {
  const pageButtons = document.querySelectorAll('.pagination button');
  pageButtons.forEach((button, index) => {
    if (index === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

  createPageButtons(); // Call this function to create the page buttons initially
  showPage(currentPage);
});

// Первый запрос
let disp_001 = document.querySelector('.display__name__wall_001');
let disp_002 = document.querySelector('.display__name__wall_002');
let disp_003 = document.querySelector('.display__name__wall_003');
let disp_004 = document.querySelector('.display__name__wall_004');
let disp_005 = document.querySelector('.display__name__wall_005');

let summ_words;

fetch('.../statistics')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    summ_words = data['0']['word_count'];
    disp_001.innerHTML = Math.ceil((data['0']['word_count'])/1000);
    disp_002.innerHTML = Math.ceil((data['0']['word_count'])/100);
    disp_003.innerHTML = (data['0']['word_count']) % 10 ;
  })
  .catch(error => {
    console.error('Ошибка при выполнении запроса:', error);
  });

  
// Второй запрос
fetch('.../wstatistics')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.querySelector('.display__table__number_00001').innerHTML = data['0']['text'];
    document.querySelector('.display__table__number_00002').innerHTML = summ_words/data['0']['number'];
    document.querySelector('.display__table__number_00003').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_00004').innerHTML = (summ_words/data['0']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_00005').innerHTML = data['1']['text'];
    document.querySelector('.display__table__number_00006').innerHTML = summ_words/data['1']['number'];
    document.querySelector('.display__table__number_00007').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_00008').innerHTML = (summ_words/data['1']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_00009').innerHTML = data['2']['text'];
    document.querySelector('.display__table__number_000010').innerHTML = summ_words/data['2']['number'];
    document.querySelector('.display__table__number_000011').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000012').innerHTML = (summ_words/data['2']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000013').innerHTML = data['3']['text'];
    document.querySelector('.display__table__number_000014').innerHTML = summ_words/data['3']['number'];
    document.querySelector('.display__table__number_000015').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000016').innerHTML = (summ_words/data['3']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000017').innerHTML = data['4']['text'];
    document.querySelector('.display__table__number_000018').innerHTML = summ_words/data['4']['number'];
    document.querySelector('.display__table__number_000019').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000020').innerHTML = (summ_words/data['4']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000021').innerHTML = data['5']['text'];
    document.querySelector('.display__table__number_000022').innerHTML = summ_words/data['5']['number'];
    document.querySelector('.display__table__number_000023').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000024').innerHTML = (summ_words/data['5']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000025').innerHTML = data['6']['text'];
    document.querySelector('.display__table__number_000026').innerHTML = summ_words/data['6']['number'];
    document.querySelector('.display__table__number_000027').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000028').innerHTML = (summ_words/data['6']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000029').innerHTML = data['7']['text'];
    document.querySelector('.display__table__number_000030').innerHTML = summ_words/data['7']['number'];
    document.querySelector('.display__table__number_000031').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000032').innerHTML = (summ_words/data['7']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000033').innerHTML = data['8']['text'];
    document.querySelector('.display__table__number_000034').innerHTML = summ_words/data['8']['number'];
    document.querySelector('.display__table__number_000035').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000036').innerHTML = (summ_words/data['8']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000037').innerHTML = data['9']['text']; 
    document.querySelector('.display__table__number_000038').innerHTML = summ_words/data['9']['number'];
    document.querySelector('.display__table__number_000039').innerHTML = Math.log(10000000/1000); 
    document.querySelector('.display__table__number_000040').innerHTML = (summ_words/data['9']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000042').innerHTML = data['10']['text'];
    document.querySelector('.display__table__number_000043').innerHTML = summ_words/data['10']['number'];
    document.querySelector('.display__table__number_000044').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000045').innerHTML = (summ_words/data['10']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000046').innerHTML = data['11']['text'];
    document.querySelector('.display__table__number_000047').innerHTML = summ_words/data['11']['number'];
    document.querySelector('.display__table__number_000048').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000049').innerHTML = (summ_words/data['11']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000050').innerHTML = data['12']['text'];
    document.querySelector('.display__table__number_000051').innerHTML = summ_words/data['12']['number'];
    document.querySelector('.display__table__number_000052').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000053').innerHTML = (summ_words/data['12']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000054').innerHTML = data['13']['text'];
    document.querySelector('.display__table__number_000055').innerHTML = summ_words/data['13']['number'];
    document.querySelector('.display__table__number_000056').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000057').innerHTML = (summ_words/data['13']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000058').innerHTML = data['14']['text'];
    document.querySelector('.display__table__number_000059').innerHTML = summ_words/data['14']['number'];
    document.querySelector('.display__table__number_000060').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000061').innerHTML = (summ_words/data['14']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000062').innerHTML = data['15']['text'];
    document.querySelector('.display__table__number_000063').innerHTML = summ_words/data['15']['number'];
    document.querySelector('.display__table__number_000064').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000065').innerHTML = (summ_words/data['15']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000066').innerHTML = data['16']['text'];
    document.querySelector('.display__table__number_000067').innerHTML = summ_words/data['16']['number'];
    document.querySelector('.display__table__number_000068').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000069').innerHTML = (summ_words/data['16']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000070').innerHTML = data['17']['text'];
    document.querySelector('.display__table__number_000071').innerHTML = summ_words/data['17']['number'];
    document.querySelector('.display__table__number_000072').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000073').innerHTML = (summ_words/data['17']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000074').innerHTML = data['18']['text'];
    document.querySelector('.display__table__number_000075').innerHTML = summ_words/data['18']['number'];
    document.querySelector('.display__table__number_000076').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000077').innerHTML = (summ_words/data['18']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000078').innerHTML = data['19']['text'];
    document.querySelector('.display__table__number_000079').innerHTML = summ_words/data['19']['number'];
    document.querySelector('.display__table__number_000080').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000081').innerHTML = (summ_words/data['19']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000082').innerHTML = data['20']['text'];
    document.querySelector('.display__table__number_000083').innerHTML = summ_words/data['20']['number'];
    document.querySelector('.display__table__number_000084').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000085').innerHTML = (summ_words/data['20']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000086').innerHTML = data['21']['text'];
    document.querySelector('.display__table__number_000087').innerHTML = summ_words/data['21']['number'];
    document.querySelector('.display__table__number_000088').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000089').innerHTML = (summ_words/data['21']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000090').innerHTML = data['22']['text'];
    document.querySelector('.display__table__number_000091').innerHTML = summ_words/data['22']['number'];
    document.querySelector('.display__table__number_000092').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000093').innerHTML = (summ_words/data['22']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000094').innerHTML = data['23']['text'];
    document.querySelector('.display__table__number_000095').innerHTML = summ_words/data['23']['number'];
    document.querySelector('.display__table__number_000096').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_000097').innerHTML = (summ_words/data['23']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_000098').innerHTML = data['24']['text']; 
    document.querySelector('.display__table__number_000099').innerHTML = summ_words/data['24']['number']; 
    document.querySelector('.display__table__number_0000100').innerHTML = Math.log(10000000/1000); 
    document.querySelector('.display__table__number_0000101').innerHTML = (summ_words/data['24']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000102').innerHTML = data['25']['text'];
    document.querySelector('.display__table__number_0000103').innerHTML = summ_words/data['25']['number'];
    document.querySelector('.display__table__number_0000104').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000105').innerHTML = (summ_words/data['25']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000106').innerHTML = data['26']['text'];
    document.querySelector('.display__table__number_0000107').innerHTML = summ_words/data['26']['number'];
    document.querySelector('.display__table__number_0000108').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000109').innerHTML = (summ_words/data['26']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000110').innerHTML = data['27']['text'];
    document.querySelector('.display__table__number_0000111').innerHTML = summ_words/data['27']['number'];
    document.querySelector('.display__table__number_0000112').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000113').innerHTML = (summ_words/data['27']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000114').innerHTML = data['28']['text'];
    document.querySelector('.display__table__number_0000115').innerHTML = summ_words/data['28']['number'];
    document.querySelector('.display__table__number_0000116').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000117').innerHTML = (summ_words/data['28']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000118').innerHTML = data['29']['text'];
    document.querySelector('.display__table__number_0000119').innerHTML = summ_words/data['29']['number'];
    document.querySelector('.display__table__number_0000120').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000121').innerHTML = (summ_words/data['29']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000122').innerHTML = data['30']['text'];
    document.querySelector('.display__table__number_0000123').innerHTML = summ_words/data['30']['number'];
    document.querySelector('.display__table__number_0000124').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000125').innerHTML = (summ_words/data['30']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000126').innerHTML = data['30']['text'];
    document.querySelector('.display__table__number_0000127').innerHTML = summ_words/data['30']['number'];
    document.querySelector('.display__table__number_0000128').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000129').innerHTML = (summ_words/data['30']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000130').innerHTML = data['31']['text'];
    document.querySelector('.display__table__number_0000131').innerHTML = summ_words/data['31']['number'];
    document.querySelector('.display__table__number_0000132').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000133').innerHTML = (summ_words/data['31']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000134').innerHTML = data['32']['text'];
    document.querySelector('.display__table__number_0000135').innerHTML = summ_words/data['32']['number'];
    document.querySelector('.display__table__number_0000136').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000137').innerHTML = (summ_words/data['32']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000138').innerHTML = data['33']['text'];
    document.querySelector('.display__table__number_0000139').innerHTML = summ_words/data['33']['number'];
    document.querySelector('.display__table__number_0000140').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000141').innerHTML = (summ_words/data['33']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000142').innerHTML = data['34']['text'];
    document.querySelector('.display__table__number_0000143').innerHTML = summ_words/data['34']['number'];
    document.querySelector('.display__table__number_0000144').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000145').innerHTML = (summ_words/data['34']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000146').innerHTML = data['35']['text'];
    document.querySelector('.display__table__number_0000147').innerHTML = summ_words/data['35']['number'];
    document.querySelector('.display__table__number_0000148').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000149').innerHTML = (summ_words/data['35']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000150').innerHTML = data['36']['text'];
    document.querySelector('.display__table__number_0000151').innerHTML = summ_words/data['36']['number'];
    document.querySelector('.display__table__number_0000152').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000153').innerHTML = (summ_words/data['36']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000154').innerHTML = data['37']['text'];
    document.querySelector('.display__table__number_0000155').innerHTML = summ_words/data['37']['number'];
    document.querySelector('.display__table__number_0000156').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000167').innerHTML = (summ_words/data['37']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000168').innerHTML = data['38']['text'];
    document.querySelector('.display__table__number_0000169').innerHTML = summ_words/data['38']['number'];
    document.querySelector('.display__table__number_0000170').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000171').innerHTML = (summ_words/data['38']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000172').innerHTML = data['39']['text'];
    document.querySelector('.display__table__number_0000173').innerHTML = summ_words/data['39']['number'];
    document.querySelector('.display__table__number_0000174').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000175').innerHTML = (summ_words/data['39']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000176').innerHTML = data['40']['text'];
    document.querySelector('.display__table__number_0000177').innerHTML = summ_words/data['40']['number'];
    document.querySelector('.display__table__number_0000178').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000179').innerHTML = (summ_words/data['40']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000180').innerHTML = data['41']['text'];
    document.querySelector('.display__table__number_0000181').innerHTML = summ_words/data['41']['number'];
    document.querySelector('.display__table__number_0000182').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000183').innerHTML = (summ_words/data['41']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000184').innerHTML = data['42']['text'];
    document.querySelector('.display__table__number_0000185').innerHTML = summ_words/data['42']['number'];
    document.querySelector('.display__table__number_0000186').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000187').innerHTML = (summ_words/data['42']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000188').innerHTML = data['43']['text'];
    document.querySelector('.display__table__number_0000189').innerHTML = summ_words/data['43']['number'];
    document.querySelector('.display__table__number_0000190').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000191').innerHTML = (summ_words/data['43']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000192').innerHTML = data['44']['text'];
    document.querySelector('.display__table__number_0000193').innerHTML = summ_words/data['44']['number'];
    document.querySelector('.display__table__number_0000194').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000195').innerHTML = (summ_words/data['44']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000196').innerHTML = data['45']['text'];
    document.querySelector('.display__table__number_0000197').innerHTML = summ_words/data['45']['number'];
    document.querySelector('.display__table__number_0000198').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000199').innerHTML = (summ_words/data['45']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000200').innerHTML = data['46']['text'];
    document.querySelector('.display__table__number_0000201').innerHTML = summ_words/data['46']['number'];
    document.querySelector('.display__table__number_0000202').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000203').innerHTML = (summ_words/data['46']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000204').innerHTML  = data['47']['text'];
    document.querySelector('.display__table__number_0000205').innerHTML  = summ_words/data['47']['number'];
    document.querySelector('.display__table__number_0000206').innerHTML  = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000207').innerHTML  = (summ_words/data['47']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000208').innerHTML = data['48']['text'];
    document.querySelector('.display__table__number_0000209').innerHTML = summ_words/data['48']['number'];
    document.querySelector('.display__table__number_0000210').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000211').innerHTML = (summ_words/data['48']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000212').innerHTML = data['49']['text'];
    document.querySelector('.display__table__number_0000213').innerHTML = summ_words/data['49']['number'];
    document.querySelector('.display__table__number_0000214').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000215').innerHTML = (summ_words/data['49']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000216').innerHTML = data['50']['text'];
    document.querySelector('.display__table__number_0000217').innerHTML = summ_words/data['50']['number'];
    document.querySelector('.display__table__number_0000218').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000219').innerHTML = (summ_words/data['50']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000220').innerHTML = data['51']['text'];
    document.querySelector('.display__table__number_0000221').innerHTML = summ_words/data['51']['number'];
    document.querySelector('.display__table__number_0000222').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000223').innerHTML = (summ_words/data['51']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000224').innerHTML = data['52']['text'];
    document.querySelector('.display__table__number_0000225').innerHTML = summ_words/data['52']['number'];
    document.querySelector('.display__table__number_0000226').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000227').innerHTML = (summ_words/data['52']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000228').innerHTML = data['53']['text'];
    document.querySelector('.display__table__number_0000229').innerHTML = summ_words/data['53']['number'];
    document.querySelector('.display__table__number_0000230').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000231').innerHTML = (summ_words/data['53']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000232').innerHTML = data['54']['text'];
    document.querySelector('.display__table__number_0000233').innerHTML = summ_words/data['54']['number'];
    document.querySelector('.display__table__number_0000234').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000235').innerHTML = (summ_words/data['54']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000236').innerHTML = data['55']['text'];
    document.querySelector('.display__table__number_0000237').innerHTML = summ_words/data['55']['number'];
    document.querySelector('.display__table__number_0000238').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000239').innerHTML = (summ_words/data['55']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000240').innerHTML = data['56']['text'];
    document.querySelector('.display__table__number_0000241').innerHTML = summ_words/data['56']['number'];
    document.querySelector('.display__table__number_0000242').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000243').innerHTML = (summ_words/data['56']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000244').innerHTML  = data['57']['text'];
    document.querySelector('.display__table__number_0000245').innerHTML  = summ_words/data['57']['number'];
    document.querySelector('.display__table__number_0000246').innerHTML  = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000247').innerHTML  = (summ_words/data['57']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000248').innerHTML = data['58']['text'];
    document.querySelector('.display__table__number_0000249').innerHTML = summ_words/data['58']['number'];
    document.querySelector('.display__table__number_0000250').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000251').innerHTML = (summ_words/data['58']['number'])*Math.log(10000000/1000);
    
    document.querySelector('.display__table__number_0000252').innerHTML = data['59']['text'];
    document.querySelector('.display__table__number_0000253').innerHTML = summ_words/data['59']['number'];
    document.querySelector('.display__table__number_0000254').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000255').innerHTML = (summ_words/data['59']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000256').innerHTML = data['60']['text'];
    document.querySelector('.display__table__number_0000257').innerHTML = summ_words/data['60']['number'];
    document.querySelector('.display__table__number_0000258').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000259').innerHTML = (summ_words/data['60']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000260').innerHTML = data['61']['text'];
    document.querySelector('.display__table__number_0000261').innerHTML = summ_words/data['61']['number'];
    document.querySelector('.display__table__number_0000262').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000263').innerHTML = (summ_words/data['61']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000268').innerHTML = data['62']['text'];
    document.querySelector('.display__table__number_0000269').innerHTML = summ_words/data['62']['number'];
    document.querySelector('.display__table__number_0000270').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000271').innerHTML = (summ_words/data['62']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000272').innerHTML = data['63']['text']; 
    document.querySelector('.display__table__number_0000273').innerHTML = summ_words/data['63']['number']; 
    document.querySelector('.display__table__number_0000274').innerHTML = Math.log(10000000/1000); 
    document.querySelector('.display__table__number_0000275').innerHTML = (summ_words/data['63']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000276').innerHTML = data['64']['text'];
    document.querySelector('.display__table__number_0000277').innerHTML = summ_words/data['64']['number'];
    document.querySelector('.display__table__number_0000278').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000279').innerHTML = (summ_words/data['64']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000280').innerHTML = data['65']['text'];
    document.querySelector('.display__table__number_0000281').innerHTML = summ_words/data['65']['number'];
    document.querySelector('.display__table__number_0000282').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000283').innerHTML = (summ_words/data['65']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000284').innerHTML = data['66']['text'];
    document.querySelector('.display__table__number_0000285').innerHTML = summ_words/data['66']['number'];
    document.querySelector('.display__table__number_0000286').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000287').innerHTML = (summ_words/data['66']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000288').innerHTML = data['67']['text'];
    document.querySelector('.display__table__number_0000289').innerHTML = summ_words/data['67']['number'];
    document.querySelector('.display__table__number_0000290').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000291').innerHTML = (summ_words/data['67']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000292').innerHTML = data['68']['text'];
    document.querySelector('.display__table__number_0000293').innerHTML = summ_words/data['68']['number'];
    document.querySelector('.display__table__number_0000294').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000295').innerHTML = (summ_words/data['68']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000296').innerHTML = data['69']['text'];
    document.querySelector('.display__table__number_0000297').innerHTML = summ_words/data['69']['number'];
    document.querySelector('.display__table__number_0000298').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000299').innerHTML = (summ_words/data['69']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000300').innerHTML = data['70']['text'];
    document.querySelector('.display__table__number_0000301').innerHTML = summ_words/data['70']['number'];
    document.querySelector('.display__table__number_0000302').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000303').innerHTML = (summ_words/data['70']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000304').innerHTML = data['71']['text']; 
    document.querySelector('.display__table__number_0000305').innerHTML = summ_words/data['71']['number']; 
    document.querySelector('.display__table__number_0000306').innerHTML = Math.log(10000000/1000); 
    document.querySelector('.display__table__number_0000307').innerHTML = (summ_words/data['71']['number'])*Math.log(10000000/1000); 

    document.querySelector('.display__table__number_0000308').innerHTML = data['72']['text'];
    document.querySelector('.display__table__number_0000309').innerHTML = summ_words/data['72']['number'];
    document.querySelector('.display__table__number_0000310').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000311').innerHTML = (summ_words/data['72']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000312').innerHTML = data['73']['text'];
    document.querySelector('.display__table__number_0000313').innerHTML = summ_words/data['73']['number'];
    document.querySelector('.display__table__number_0000314').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000315').innerHTML = (summ_words/data['73']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000316').innerHTML = data['73']['text'];
    document.querySelector('.display__table__number_0000317').innerHTML = summ_words/data['73']['number'];
    document.querySelector('.display__table__number_0000318').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000319').innerHTML = (summ_words/data['73']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000320').innerHTML = data['74']['text'];
    document.querySelector('.display__table__number_0000321').innerHTML = summ_words/data['74']['number'];
    document.querySelector('.display__table__number_0000322').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000323').innerHTML = (summ_words/data['74']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000324').innerHTML = data['74']['text'];
    document.querySelector('.display__table__number_0000325').innerHTML = summ_words/data['74']['number'];
    document.querySelector('.display__table__number_0000326').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000327').innerHTML = (summ_words/data['74']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000328').innerHTML =  data['75']['text'];
    document.querySelector('.display__table__number_0000329').innerHTML =  summ_words/data['75']['number'];
    document.querySelector('.display__table__number_0000330').innerHTML =  Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000331').innerHTML =  (summ_words/data['75']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000332').innerHTML = data['76']['text'];
    document.querySelector('.display__table__number_0000333').innerHTML = summ_words/data['76']['number'];
    document.querySelector('.display__table__number_0000334').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000335').innerHTML = (summ_words/data['76']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000336').innerHTML = data['77']['text'];
    document.querySelector('.display__table__number_0000337').innerHTML = summ_words/data['77']['number'];
    document.querySelector('.display__table__number_0000338').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000339').innerHTML = (summ_words/data['77']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000340').innerHTML = data['78']['text'];
    document.querySelector('.display__table__number_0000341').innerHTML = summ_words/data['78']['number'];
    document.querySelector('.display__table__number_0000342').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000343').innerHTML = (summ_words/data['78']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000344').innerHTML = data['79']['text'];
    document.querySelector('.display__table__number_0000345').innerHTML = summ_words/data['79']['number'];
    document.querySelector('.display__table__number_0000346').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000347').innerHTML = (summ_words/data['79']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000348').innerHTML = data['80']['text'];
    document.querySelector('.display__table__number_0000349').innerHTML = summ_words/data['80']['number'];
    document.querySelector('.display__table__number_0000350').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000351').innerHTML = (summ_words/data['80']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000352').innerHTML = data['81']['text'];
    document.querySelector('.display__table__number_0000353').innerHTML = summ_words/data['81']['number'];
    document.querySelector('.display__table__number_0000354').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000355').innerHTML = (summ_words/data['81']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000356').innerHTML = data['82']['text'];
    document.querySelector('.display__table__number_0000357').innerHTML = summ_words/data['82']['number'];
    document.querySelector('.display__table__number_0000358').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000359').innerHTML = (summ_words/data['82']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000360').innerHTML = data['83']['text'];
    document.querySelector('.display__table__number_0000361').innerHTML = summ_words/data['83']['number'];
    document.querySelector('.display__table__number_0000362').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000363').innerHTML = (summ_words/data['83']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000364').innerHTML = data['84']['text'];
    document.querySelector('.display__table__number_0000365').innerHTML = summ_words/data['84']['number'];
    document.querySelector('.display__table__number_0000366').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000367').innerHTML = (summ_words/data['84']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000368').innerHTML = data['85']['text'];
    document.querySelector('.display__table__number_0000369').innerHTML = summ_words/data['85']['number'];
    document.querySelector('.display__table__number_0000370').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000371').innerHTML = (summ_words/data['85']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000372').innerHTML = data['86']['text'];
    document.querySelector('.display__table__number_0000373').innerHTML = summ_words/data['86']['number'];
    document.querySelector('.display__table__number_0000374').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000375').innerHTML = (summ_words/data['86']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000376').innerHTML = data['87']['text'];
    document.querySelector('.display__table__number_0000377').innerHTML = summ_words/data['87']['number'];
    document.querySelector('.display__table__number_0000378').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000379').innerHTML = (summ_words/data['87']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000380').innerHTML = data['88']['text'];
    document.querySelector('.display__table__number_0000381').innerHTML = summ_words/data['88']['number'];
    document.querySelector('.display__table__number_0000382').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000383').innerHTML = (summ_words/data['88']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000384').innerHTML = data['89']['text'];
    document.querySelector('.display__table__number_0000385').innerHTML = summ_words/data['89']['number'];
    document.querySelector('.display__table__number_0000386').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000387').innerHTML = (summ_words/data['89']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000388').innerHTML = data['90']['text'];
    document.querySelector('.display__table__number_0000389').innerHTML = summ_words/data['90']['number'];
    document.querySelector('.display__table__number_0000390').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000391').innerHTML = (summ_words/data['90']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000392').innerHTML = data['91']['text'];
    document.querySelector('.display__table__number_0000393').innerHTML = summ_words/data['91']['number'];
    document.querySelector('.display__table__number_0000394').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000395').innerHTML = (summ_words/data['91']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000396').innerHTML = data['92']['text'];
    document.querySelector('.display__table__number_0000397').innerHTML = summ_words/data['92']['number'];
    document.querySelector('.display__table__number_0000398').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000399').innerHTML = (summ_words/data['92']['number'])*Math.log(10000000/1000);

    document.querySelector('.display__table__number_0000400').innerHTML = data['93']['text'];
    document.querySelector('.display__table__number_0000401').innerHTML = summ_words/data['93']['number'];
    document.querySelector('.display__table__number_0000402').innerHTML = Math.log(10000000/1000);
    document.querySelector('.display__table__number_0000403').innerHTML = (summ_words/data['93']['number'])*Math.log(10000000/1000);

 

    
  })
  .catch(error => {
    console.error('Ошибка при выполнении запроса:', error);
  });

  

  
