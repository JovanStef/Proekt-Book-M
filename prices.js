function Prices(parter, fanPit, vip) {
    this.parter = parter;
    this.fanPit = fanPit;
    this.vip = vip;

    this.getParter = function () {
        return "Parter " + this.parter;
    }
    this.getFanPit = function () {
        return "Fan Pit " + this.fanPit;
    }
    this.getVip = function () {
        return "VIP " + this.vip;
    }

    this.setParter = function (newParter) {
        this.parter = newParter;
    }
    this.setFanPit = function (newFanPit) {
        this.fanPit = newFanPit;
    }
    this.setVip = function (newVip) {
        this.vip = newVip;
    }
}