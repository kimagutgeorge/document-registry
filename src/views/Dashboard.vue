<template>

<div class="row d-flex px-2">
    <PageTitle page_name="Dashboard"/>
</div>
  
<div class="w-100 d-flex px-2">
    <div class="vh-10 col-12 card no-border d-flex justify-content-center">
        <div class="col-12 h-100 d-flex flex-column justify-contenter-center p-2">
            <div class="h-100 w-100 d-flex justify-content-center">
                <div class="stat-card h-100 w-100 d-flex flex-no-wrap justify-content-center">
                    <div class="img-holder h-100 d-flex flex-column justify-content-center">
                        <img src="/icons/receipt.png" class="user-icon">
                    </div>
                    <div class="text-holder h-100 d-flex flex-column justify-content-center ms-2">
                        <p class="text-secondary"><span class="f-20 fw-bold">56</span> Documents</p>
                    </div>
                </div>
                <div class="stat-card h-100 w-100 d-flex flex-no-wrap justify-content-center">
                    <div class="img-holder h-100 d-flex flex-column justify-content-center">
                        <img src="/icons/check.png" class="user-icon">
                    </div>
                    <div class="text-holder h-100 d-flex flex-column justify-content-center ms-2">
                        <p class="text-secondary"><span class="f-20 fw-bold">17</span> Checkouts</p>
                    </div>
                </div>
                <div class="stat-card h-100 w-100 d-flex flex-no-wrap justify-content-center">
                    <div class="img-holder h-100 d-flex flex-column justify-content-center">
                        <img src="/icons/wallet.png" class="user-icon">
                    </div>
                    <div class="text-holder h-100 d-flex flex-column justify-content-center ms-2">
                        <p class="text-secondary"><span class="f-20 fw-bold">5</span> Pending Requests</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
<div class="d-flex w-100 px-2 mt-2 dashboard-lower">
    <!-- monthly -->
    <div class="vh-20 col-12 d-flex justify-content-center">
        <div class="col-12 h-100 d-flex flex-column justify-contenter-center p-2">
            <div class="h-100 w-100 d-flex justify-content-center">
                <div class="stat-card card ms-2 no-border h-100 w-100 d-flex flex-no-wrap justify-content-center">
                    <div class="img-holder h-100 w-100 d-flex flex-column justify-content-center">
                        <div class="bar-holder h-75 d-flex">
                            <div class="bar h-100 bg-primary"></div>
                            <div class="bar h-75 bg-primary"></div>
                            <div class="bar h-50 bg-primary"></div>
                            <div class="bar h-100 bg-primary"></div>
                        </div>
                    </div>
                    <div class="text-holder h-100 w-100 d-flex flex-column justify-content-center ms-2">
                        <p class="text-secondary"><span class="f-32">56</span> Total Documents</p>
                    </div>
                </div>
                <!-- end card -->
                <div class="stat-card card ms-2 no-border h-100 w-100 d-flex flex-no-wrap justify-content-center">
                    <div class="img-holder h-100 w-100 d-flex flex-column justify-content-center">
                        <div class="bar-holder h-75 d-flex">
                            <div class="bar h-100 bg-success"></div>
                            <div class="bar h-50 bg-success"></div>
                            <div class="bar h-75 bg-success"></div>
                            <div class="bar h-100 bg-success"></div>
                        </div>
                    </div>
                    <div class="text-holder h-100 w-100 d-flex flex-column justify-content-center ms-2">
                        <p class="text-secondary"><span class="f-32">126</span> Checkouts</p>
                    </div>
                </div>
                <!-- end card -->
                <div class="stat-card card ms-2 no-border h-100 w-100 d-flex flex-no-wrap justify-content-center">
                    <div class="img-holder h-100 w-100 d-flex flex-column justify-content-center">
                        <div class="bar-holder h-75 d-flex">
                            <div class="bar h-50 bg-danger"></div>
                            <div class="bar h-100 bg-danger"></div>
                            <div class="bar h-50 bg-danger"></div>
                            <div class="bar h-100 bg-danger"></div>
                            
                        </div>
                    </div>
                    <div class="text-holder h-100 w-100 d-flex flex-column justify-content-center ms-2">
                        <p class="text-secondary"><span class="f-32">210</span> Pending Requests</p>
                    </div>
                </div>
                <!-- end card -->
                
            </div>
        </div>
    </div>
</div>
<!-- graphs -->
<div class="d-flex w-100 px-2 mt-2">
    <div class="ms-2 px-2 bg-white w-100 row graphs d-flex flex-no-wrap">
        <div class="col-6">
            <li class="text-dark px-2 custom-fw-bold f-13 sm-title mt-2">Request's Traffic</li>
            <Line :data="lineChartData" :options="lineChartOptions" />
        </div>
        <div class="col-6">
            <li class="text-dark px-2 custom-fw-bold f-13 sm-title mt-2">Document Types</li>
            <Pie :data="pieChartData" :options="pieChartOptions" class="pie-chart"/>
        </div>
    </div>
</div>

</template>
<script>
import PageTitle from '@/components/titles/PageTitle.vue';
import { Line, Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale
)



export default{
    name: "UserDashboard",
    components: { PageTitle, Line, Pie },
  data() {
    return {
      // Existing line chart data
      lineChartData: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Requests',
          data: [5, 0, 56, 12, 14, 25, 25],
          borderColor: '#f87979',
          backgroundColor: 'rgba(248, 121, 121, 0.1)',
          borderWidth: 2,
          tension: 0.4
        }]
      },
      lineChartOptions: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      },

      // New pie chart data
      pieChartData: {
        labels: ['Title Deed', 'Grants', 'Lease Agreement', 'Survey Plan'],
        datasets: [{
          data: [12, 8, 15, 5], // Total = 40
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0'
          ]
        }]
      },
      pieChartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    }
  }
}
</script>