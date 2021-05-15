BASE=/home/shubham/drive/code/birds/results/

mkdir results/birds
mkdir results/car
mkdir results/motorbike
mkdir results/shoe

scp siberian:$BASE/PRUNE4_FLIPFalse_SoftrasFix_optimCamera_predictTextureFlipSPADENoNorm_optContAdamLr1e-4_batch12_SoftrasParamDefault_UpsampleBilinear_texShift_flip/render/*.mp4 results/birds/
scp siberian:$BASE/PRUNE4_FLIPFalse_SoftrasFix_optimCamera_predictTextureFlipSPADENoNorm_optContAdamLr1e-4_batch12_SoftrasParamDefault_UpsampleBilinear_texShift_flip/render/*_img_input.png results/birds/


scp siberian:$BASE/Arxiv_car_UCMR_lapDeltaV2_lapPredV.5_tex.2_grLap0_texFlip/val/render/*.mp4 results/car/
scp siberian:$BASE/Arxiv_car_UCMR_lapDeltaV2_lapPredV.5_tex.2_grLap0_texFlip/val/render/*_img_input.png results/car/


scp siberian:$BASE/Arxiv_motorbike_unwrap_CMR_lapDeltaV2_lapPredV_texFlip/val/render/*.mp4 results/motorbike/
scp siberian:$BASE/Arxiv_motorbike_unwrap_CMR_lapDeltaV2_lapPredV_texFlip/val/render/*_img_input.png results/motorbike/


scp siberian:$BASE/PRUNE4_FLIPFalse_Arxiv_shoe5k_UCMR_lapDeltaV2_lapPredV_flip/test/render/*.mp4 results/shoe/
scp siberian:$BASE/PRUNE4_FLIPFalse_Arxiv_shoe5k_UCMR_lapDeltaV2_lapPredV_flip/test/render/*_img_input.png results/shoe/
