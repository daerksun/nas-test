#!/bin/bash

sudo kubeadm config images pull
sudo sed -i "3 s/^/$(sudo tailscale ip --4)\tk8scp\n/" /etc/hosts
sudo kubeadm init --pod-network-cidr=100.120.0.0/16 --cri-socket=unix:///run/containerd/containerd.sock --upload-certs --control-plane-endpoint=k8scp
mkdir -p $HOME/.kube
sudo cp /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
export KUBECONFIG=$HOME/.kube/config
curl -O https://raw.githubusercontent.com/projectcalico/calico/v3.28.2/manifests/tigera-operator.yaml
curl -O https://raw.githubusercontent.com/projectcalico/calico/v3.28.2/manifests/custom-resources.yaml
sed -i "s/192.168.0.0\/16/100.120.0.0\/16/" custom-resources.yaml
kubectl create -f tigera-operator.yaml
kubectl create -f custom-resources.yaml
