# 🚀 Cloud-Native DevOps & Observability Platform

This project demonstrates an end-to-end cloud-native DevOps platform built on AWS using modern engineering practices including CI/CD, GitOps, Kubernetes orchestration, and real-time observability.

---

## 🧠 Overview

The platform automates the entire lifecycle of an application from code commit to production deployment, while providing full visibility into system and application performance.

---

## 🏗️ Architecture

Developer → GitHub → GitHub Actions (CI)
→ Docker Image → AWS ECR
→ GitOps (ArgoCD)
→ AWS EKS (Kubernetes)
→ Monitoring (Prometheus + Grafana)



---

## ⚙️ Tech Stack

- **Cloud**: AWS (EKS, ECR, EC2, IAM)
- **Containerization**: Docker
- **Orchestration**: Kubernetes (EKS)
- **CI/CD**: GitHub Actions
- **GitOps**: ArgoCD
- **Monitoring**: Prometheus, Grafana
- **Language**: Node.js

---

## 🔄 CI/CD Workflow

1. Code is pushed to GitHub
2. GitHub Actions pipeline is triggered
3. Docker image is built automatically
4. Image is pushed to AWS ECR
5. Kubernetes manifest is updated with new image tag
6. ArgoCD detects the change and deploys to EKS
7. Application is updated in production automatically

---

## 🔁 GitOps Deployment (ArgoCD)

- ArgoCD continuously monitors the Git repository
- Git is treated as the **source of truth**
- Any change in manifests is automatically applied to the cluster
- Ensures consistency, automation, and rollback capability

---

## ☁️ Kubernetes Deployment (EKS)

- Application is deployed on AWS EKS
- Exposed using a **LoadBalancer Service**
- Supports scalability and high availability
- Uses Kubernetes self-healing capabilities

---

## 📊 Monitoring & Observability

### 🔹 Prometheus
- Scrapes metrics from application and infrastructure
- Collects CPU, memory, and custom metrics

### 🔹 Grafana
- Visualizes metrics using dashboards
- Tracks system performance and application traffic

---

## 📈 Application Metrics

- Custom `/metrics` endpoint implemented using Prometheus client
- Example metric:
  - `app_requests_total` → Tracks total number of requests

---

## 🔍 Service Discovery

- Configured **ServiceMonitor**
- Enables Prometheus to automatically discover application services
- Ensures dynamic metric collection without manual configuration

---

## ⚖️ Auto Scaling

- Implemented **Horizontal Pod Autoscaler (HPA)**
- Automatically scales pods based on CPU usage
- Improves performance under load

---

## 🧪 Key Features

- ✅ Fully automated CI/CD pipeline
- ✅ GitOps-based deployment strategy
- ✅ Containerized application deployment
- ✅ Real-time monitoring and dashboards
- ✅ Application-level observability
- ✅ Auto-scaling infrastructure
- ✅ Self-healing Kubernetes workloads

---

## 🧠 Lessons Learned

- Importance of aligning Kubernetes labels for service discovery
- Understanding the difference between CI/CD and GitOps workflows
- Troubleshooting real-world issues (image pull errors, pod crashes, metrics scraping)
- Implementing observability for production readiness

---

## 🎤 How to Run

```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/

# Check pods
kubectl get pods

# Access service
kubectl get svc

👤 Author

Olalekan Okunleye
Cloud | DevOps | SRE Engineer